/**
 *
 * @param id {String}
 * @return {HTMLSpanElement}
 */
import {getChatBody} from "../utils/getChatBody";

function muteBtnHTML(id) {
    const element = document.createElement('span');
    element.setAttribute('class', 'mute_message');
    element.setAttribute('id', `mute${id}`);
    element.setAttribute('label', 'Заглушить');
    element.style.background = `url(${chrome.runtime.getURL("assets/mute.png")}) center no-repeat`;
    element.innerHTML = '<div class="mute_tooltip tt_w tt_black tt_down"><div class="tt_text">Заглушить</div></div>';
    return element;
}

export function tryToAddControls(target) {
    if (target.className === 'im-mess--check fl_l') {
        const message = target.parentElement;
        addControlButton(message)
    }
}

/**
 * Create mute button and inset it to the actionArea
 * @param actionArea {HTMLElement}
 * @param senderId {String}
 * @return {HTMLElement}
 */
function addMuteButton(actionArea, senderId) {
    const muteButton = muteBtnHTML(senderId);
    actionArea.appendChild(muteButton);
    muteButton.style.display = "none";
    return muteButton;
}

/**
 * Add event listeners to the actionArea
 * @param actionsArea {HTMLElement}
 */
function addActionAreaEvents(actionsArea) {
    actionsArea.parentElement.addEventListener("mouseenter", function (event) {
        event.target.getElementsByClassName("mute_message")[0].style.display = "inline-block";
    });

    actionsArea.parentElement.addEventListener("mouseleave", function (event) {
        event.target.getElementsByClassName("mute_message")[0].style.display = "none";
    });
}

/**
 *
 * @return {function(...[]=)}
 */
function setIdToHideHandle() {
    return function (event) {
        const clickedId = event.target.id.substr(4);     // get id of sender from element id
        let clickedName = event.target.parentElement.parentElement.parentElement.parentElement;
        clickedName = clickedName.children[0].children[0].children[0].innerText;

        chrome.storage.sync.get('idsToHide', function(data) {
            let idsToHide = data.idsToHide || [];
            if (idsToHide.filter(user => user.id == clickedId).length === 0) {
                idsToHide.push({
                    id: clickedId,
                    name: clickedName
                });
                chrome.storage.sync.set({idsToHide: idsToHide}, function () {
                    chrome.storage.sync.get('isExtensionOn', function(data) {
                        if (data.isExtensionOn) {
                            hideExistingMessages();
                        }
                    });
                });
            }
        });
    }
}

export function hideExistingMessages() {
    chrome.storage.sync.get('idsToHide', function(data) {
        const chatBody = getChatBody();
        for (let item of chatBody.children) {
            if (data.idsToHide.filter(user => user.id == item.dataset.peer).length > 0) {
                item.style.display = "none";
            }
        }
    })
}

// Try to add controls until successful. Needed for page refresh.
export function createTryToInitInterval() {
    const controlsInterval = setInterval(function () {
        if(!tryToInitControls(controlsInterval)){
            clearInterval(controlsInterval);
        }
    }, 200)
    return controlsInterval;
}

/**
 *
 * @param message {HTMLElement}
 */
function addControlButton(message) {
    const actionsArea = message.getElementsByClassName("im-mess--actions")[0];
    if (actionsArea && actionsArea.lastChild.className !== "mute_message") {
        const senderId = message.parentElement.parentElement.parentElement["dataset"].peer;
        const muteBtn = addMuteButton(actionsArea, senderId);
        addActionAreaEvents(actionsArea);
        muteBtn.addEventListener("click", setIdToHideHandle());
        return true;
    } else {
        return false;
    }
}

export function tryToInitControls() {
    let status = true;
    const chatBody = getChatBody();
    if(!chatBody) return false;
    for (let item of chatBody.children) {
        if (item.className.includes('im-mess-stack _im_mess_stack')) {
            let messages = item.children[1].children[1].getElementsByClassName('im-mess _im_mess');
            for (let message of messages) {
                status = addControlButton(message, chatBody)
            }
        }
    }
    return status;
}