var showMembersBtn = document.getElementsByClassName("_im_chat_members im-page--members")[0];
var controlsArea;

/*
function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}


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
    return `<span class="mute_message" id="mute` + id + `">
        🔇
        <span class="mutetooltip">Заглушить</span>
    </span>`
}

/*
function addControls() {
    var messages = document.getElementsByClassName("im-mess im_in _im_mess");

    for (var item of messages) {
        var actionsArea = item.getElementsByClassName("im-mess--actions")[0];
        if (actionsArea && actionsArea.lastChild.className != "mute_message") {
            var sender_id = item.parentElement.parentElement.parentElement["dataset"].peer

            actionsArea.innerHTML += muteBtnHTML(sender_id);
            var muteBtn = actionsArea.getElementsByClassName("mute_message")[0];
            muteBtn.style.display = "none";

            actionsArea.parentElement.addEventListener("mouseenter", function( event ) {
                event.target.getElementsByClassName("mute_message")[0].style.display = "inline-block";
            });

            actionsArea.parentElement.addEventListener("mouseleave", function( event ) { 
                event.target.getElementsByClassName("mute_message")[0].style.display = "none";
            });

            muteBtn.addEventListener("click", function(event) {
                var clicked_id = event.target.id.substr(event.target.id.length - 9);

                chrome.storage.sync.set({idToHide: clicked_id}, function() {
                    hidePeer(clicked_id);
                    console.log('idToHide: ' + clicked_id);
                });
            });
        }
    }
}

var chatBody = document.getElementsByClassName("_im_peer_history im-page-chat-contain")[0];

chatBody.addEventListener('DOMNodeInserted', function(event) {
    if (event.target.className == 'im-mess--check fl_l') {
        addControls();
    }
});
*/

var chatBody = document.getElementsByClassName("_im_peer_history im-page-chat-contain")[0];

chatBody.addEventListener('DOMNodeInserted', function(event) {
    if (event.target.className == 'im-mess--check fl_l') {
        var message = event.target.parentElement;
        
        var actionsArea = message.getElementsByClassName("im-mess--actions")[0];
        if (actionsArea && actionsArea.lastChild.className != "mute_message") {
            var sender_id = message.parentElement.parentElement.parentElement["dataset"].peer

            actionsArea.innerHTML += muteBtnHTML(sender_id);
            var muteBtn = actionsArea.getElementsByClassName("mute_message")[0];
            muteBtn.style.display = "none";

            actionsArea.parentElement.addEventListener("mouseenter", function( event ) {
                event.target.getElementsByClassName("mute_message")[0].style.display = "inline-block";
            });

            actionsArea.parentElement.addEventListener("mouseleave", function( event ) { 
                event.target.getElementsByClassName("mute_message")[0].style.display = "none";
            });

            muteBtn.addEventListener("click", function(event) {
                var clicked_id = event.target.id.substr(4);

                chrome.storage.sync.set({idToHide: clicked_id}, function() {
                    hidePeer(clicked_id);
                    console.log('idToHide: ' + clicked_id);
                });
            });
        }
    }
});
