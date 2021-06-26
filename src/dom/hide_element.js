import {getChatBody} from "../utils/getChatBody";

export function addNewMessageEventListener() {
    const chatBody = getChatBody();
    chatBody.addEventListener('DOMNodeInserted', function(event) {
        newMessageHandler(event.target)
    });
}

function newMessageHandler(message) {
    if (message.className === 'im-mess-stack _im_mess_stack ') {
        chrome.storage.sync.get('isExtensionOn', function(data) {
            let isExtensionOn = data.isExtensionOn;
            chrome.storage.sync.get('idsToHide', function(data) {
                if (isExtensionOn) {
                    if (data.idsToHide.includes(message.dataset.peer)) {
                        message.style.display = "none";
                    }
                }
            });
        });
    }
}