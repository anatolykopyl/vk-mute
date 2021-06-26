import './dom.css'
import {createTryToInitInterval, hideExistingMessages, tryToInitControls} from "./controls";
import {UrlController} from "../utils/Url";
import {addNewMessageEventListener} from "./hide_element";

function init() {
    const url = new UrlController();
    url.onChange((oldUrl, newUrl) => {
        // chrome.storage.sync.get('idToHide', function (data) {
        //     let idToHide = data.idToHide;
        //     hideExistingMessages(idToHide)
        // });
        if (tryToInitControls()) {
            createTryToInitInterval();
            addNewMessageEventListener();
            hideExistingMessages();
        }
    })
}

init();