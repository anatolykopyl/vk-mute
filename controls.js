var showMembersBtn = document.getElementsByClassName("_im_chat_members im-page--members")[0];
var controlsArea;

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

/*
showMembersBtn.addEventListener('click', function() {
    var checkExist = setInterval(function() {
        controlsArea = document.getElementsByClassName("ListItem__aside");

        if (controlsArea.length > 0) {
            for (var item of controlsArea) {
                // Narrowing the list to onle people
                if (item.parentElement.firstElementChild.firstElementChild.classList.contains('Entity')) {
                    var link = item.parentElement.firstElementChild.firstElementChild.children[1].firstElementChild.firstElementChild.href;
                    var id = link.substr(link.length - 9);
                    if (isInt(id)) {
                        item.innerHTML += '<button class="muteBtn" id="' + id + '">' + id + '</button>';
                    }
                }
            }

            clearInterval(checkExist);
        }
    }, 100);
});
*/

function muteBtnHTML(id) {
    return '<span style="vertical-align:middle;" class="mute_message" id="mute' + id + '">🔇</span>'
}

function addControls() {
    var messages = document.getElementsByClassName("im-mess im_in _im_mess");

    for (var item of messages) {
        var actionsArea = item.getElementsByClassName("im-mess--actions")[0];
        var sender_id = item.parentElement.parentElement.parentElement["dataset"].peer

        actionsArea.innerHTML += muteBtnHTML(sender_id);
        var muteBtn = actionsArea.getElementsByClassName("mute_message")[0];
        muteBtn.style.display = "none";

        actionsArea.parentElement.addEventListener("mouseenter", function( event ) {
            event.target.getElementsByClassName("mute_message")[0].style.display = "";
        });

        actionsArea.parentElement.addEventListener("mouseleave", function( event ) { 
            event.target.getElementsByClassName("mute_message")[0].style.display = "none";
        });

        muteBtn.addEventListener("click", function(event) {
            var clicked_id = event.target.id.substr(event.target.id.length - 9);

            chrome.storage.sync.set({idToHide: clicked_id}, function() {
                console.log('idToHide: ' + clicked_id);
            });
        });
    }
}

addControls();
