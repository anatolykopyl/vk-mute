{
    function muteBtnHTML(id) {
        return `<span class="mute_message" id="mute` + id + `">
            🔇
            <span class="mutetooltip">Заглушить</span>
        </span>`
    }

    function addControls(event, message = event.target.parentElement) {
        let actionsArea = message.getElementsByClassName("im-mess--actions")[0];
        if (actionsArea && actionsArea.lastChild.className != "mute_message") {
            var sender_id = message.parentElement.parentElement.parentElement["dataset"].peer

            actionsArea.style['margin-right'] = "-30px";
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
                var clicked_id = event.target.id.substr(4);     // get id of sender from element id

                chrome.storage.sync.set({idToHide: clicked_id}, function() {
                    for (var item of chatBody.children) {
                        if (item.dataset.peer == clicked_id) {
                            item.style.display = "none";
                        }
                    }

                    console.log('idToHide: ' + clicked_id);
                });
            });
        }
    }

    let chatBody = document.getElementsByClassName("_im_peer_history im-page-chat-contain")[0];

    chatBody.addEventListener('DOMNodeInserted', function(event) {
        if (event.target.className == 'im-mess--check fl_l') {
            addControls(event);
        }
    });

    // Try to add controls until successful. Needed for page refresh.
    let controlsInterval = setInterval(function () {
        chatBody = document.getElementsByClassName("_im_peer_history im-page-chat-contain")[0];

        if (chatBody) {
            for (let item of chatBody.children) {
                if (item.className.includes('im-mess-stack _im_mess_stack')) {
                    let messages = item.children[1].children[1].getElementsByClassName('im-mess im_in _im_mess');
                    for (let message of messages) {
                        addControls(null, message);
                    }
                }
            }
        }
    }, 200);
}
