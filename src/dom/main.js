import './dom.css'
import {createTryToInitInterval, hideExistingMessages, tryToInitControls} from "./controls";
import {UrlController} from "../utils/Url";
import {addNewMessageEventListener} from "./hide_element";

function init() {
    const url = new UrlController();
    url.onChange(() => {
        if (tryToInitControls()) {
            createTryToInitInterval();
            addNewMessageEventListener();
            hideExistingMessages();
        }
    })
}

init();