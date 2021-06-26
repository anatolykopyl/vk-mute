import {getChatBody} from "../utils/getChatBody";

export function addNewMessageEventListener() {
    const chatBody = getChatBody();
    chrome.storage.sync.get('idsToHide', function(data) {
        let idsToHide = data.idsToHide;
        chatBody.addEventListener('DOMNodeInserted', function(event) {
            newMessageHandler(event.target, idsToHide)
        });
    });
}

function newMessageHandler(message) {
    if (message.className === 'im-mess-stack _im_mess_stack ') {
        let idsToHide;
        chrome.storage.sync.get('idsToHide', function(data) {
            idsToHide = data.idsToHide;
        });

        chrome.storage.sync.get('isExtensionOn', function(data) {
            if (data.isExtensionOn) {
                if (idsToHide.includes(message.dataset.peer)) {
                    message.style.display = "none";
                }
            }
        });
    }
}