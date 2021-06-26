import {getChatBody} from "../utils/getChatBody";
import {tryToAddControls} from "./controls";

export function addNewMessageEventListener() {
    const chatBody = getChatBody();
    chatBody.addEventListener('DOMNodeInserted', function(event) {
        newMessageHandler(event.target)
    });
}

function newMessageHandler(message) {
    tryToAddControls(message);
    if (message.className === 'im-mess-stack _im_mess_stack ') {
        chrome.storage.sync.get('isExtensionOn', function(data) {
            if (data.isExtensionOn) {
                chrome.storage.sync.get('idsToHide', function(data) {
                    if (data.idsToHide.filter(user => user.id == message.dataset.peer).length > 0) {
                        message.style.display = "none";
                    }
                });
            }
        });
    }
}