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
    element.innerHTML = `
        🔇
        <span class="mutetooltip">Заглушить</span>
    `;
    return element;
}

/**
 *
 * @param chatBody {HTMLElement}
 * @return {function(...[*]=)}
 */
function addControls(event) {
    console.log(event);
    if (event.target.className === 'im-mess--check fl_l') {
        const message = event.target.parentElement;
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
 * @param chatBody {HTMLElement}
 * @return {function(...[]=)}
 */
function setIdToHideHandle(chatBody) {
    return function (event) {
        const clickedId = event.target.id.substr(4);     // get id of sender from element id

        chrome.storage.sync.set({idToHide: clickedId}, function () {
            hideExistingMessages(clickedId);
            console.log('idToHide: ' + clickedId);
        });
    }
}

export function hideExistingMessages(id) {
    const chatBody = getChatBody();
    for (let item of chatBody.children) {
        if (item.dataset.peer === id) {
            item.style.display = "none";
        }
    }
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
function addControlButton(message, chatBody) {
    const actionsArea = message.getElementsByClassName("im-mess--actions")[0];
    if (actionsArea && actionsArea.lastChild.className !== "mute_message") {
        const senderId = message.parentElement.parentElement.parentElement["dataset"].peer;
        const muteBtn = addMuteButton(actionsArea, senderId);
        addActionAreaEvents(actionsArea);
        muteBtn.addEventListener("click", setIdToHideHandle(chatBody));
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
            let messages = item.children[1].children[1].getElementsByClassName('im-mess im_in _im_mess');
            for (let message of messages) {
                status = addControlButton(message, chatBody)
            }
        }
    }
    return status;
}