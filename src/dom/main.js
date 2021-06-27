import './dom.css'
import {createTryToInitInterval, hideExistingMessages, tryToInitControls} from "./controls";
import {UrlController} from "../utils/Url";
import {addNewMessageEventListener, returnMessagesEventListener} from "./hide_element";

function init() {
    const url = new UrlController();
    url.onChange(() => {
        if (tryToInitControls()) {
            createTryToInitInterval();
            addNewMessageEventListener();
            returnMessagesEventListener();
            chrome.storage.sync.get('isExtensionOn', function(data) {
                if (data.isExtensionOn) {
                    hideExistingMessages();
                }
            });
        }
    })
}

init();