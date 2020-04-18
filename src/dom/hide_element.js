import {getChatBody} from "../utils/getChatBody";

export function addNewMessageEventListener() {
    const chatBody = getChatBody();
    chrome.storage.sync.get('idToHide', function(data) {
        let idToHide = data.idToHide;
        chatBody.addEventListener('DOMNodeInserted', function(event) {
            newMessageHandler(event.target, idToHide)
        });
    });
}

function newMessageHandler(message, idToHide) {
    if (message.className === 'im-mess-stack _im_mess_stack ') {
        chrome.storage.sync.get('idToHide', function(data) {
            idToHide = data.idToHide;
        });

        chrome.storage.sync.get('isExtensionOn', function(data) {
            if (data.isExtensionOn) {
                if (message.dataset.peer === idToHide) {
                    message.style.display = "none";
                }
            }
        });
    }

}