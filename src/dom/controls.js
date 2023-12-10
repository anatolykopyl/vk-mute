import { getChatBody } from '../utils/getChatBody'
import muteSvg from './mute.svg'

/**
 *
 * @param id {String}
 * @return {HTMLSpanElement}
 */
function muteBtnHTML(id) {
  const element = document.createElement('span')
  element.setAttribute('class', 'im-mess--mute')
  element.setAttribute('id', `mute${id}`)
  element.setAttribute('label', 'Заглушить')
  element.innerHTML = `${muteSvg}<div class="mute_tooltip tt_w tt_black tt_down"><div class="tt_text">Заглушить</div></div>`
  return element
}

/**
 *
 * @param target {HTMLElenemt}
 */
export function tryToAddControls(target) {
  if (target.className === 'im-mess--check fl_l') {
    const message = target.parentElement
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
  const muteButton = muteBtnHTML(senderId)
  actionArea.appendChild(muteButton)
  muteButton.style.visibility = 'hidden'
  return muteButton
}

/**
 * Add event listeners to the actionArea
 * @param actionsArea {HTMLElement}
 */
function addActionAreaEvents(actionsArea) {
  actionsArea.parentElement.addEventListener('mouseenter', (event) => {
    event.target.getElementsByClassName('im-mess--mute')[0].style.visibility = 'visible'
  })

  actionsArea.parentElement.addEventListener('mouseleave', (event) => {
    event.target.getElementsByClassName('im-mess--mute')[0].style.visibility = 'hidden'
  })
}

/**
 *
 * @this {HTMLElement}
 */
function setIdToHideHandle() {
  const clickedId = this.id.substring(4)
  let clickedName = this.parentElement.parentElement.parentElement.parentElement
  clickedName = clickedName.children[0].children[0].children[0].textContent

  chrome.storage.sync.get('idsToHide', (data) => {
    const idsToHide = data.idsToHide || []
    if (idsToHide.filter(user => user.id === clickedId).length === 0) {
      idsToHide.push({
        id: clickedId,
        name: clickedName,
      })
      chrome.storage.sync.set({ idsToHide }, () => {
        chrome.storage.sync.get('isExtensionOn', (data) => {
          if (data.isExtensionOn)
            hideExistingMessages()
        })
      })
    }
  })
}

export function hideExistingMessages() {
  chrome.storage.sync.get('idsToHide', (data) => {
    const chatBody = getChatBody()
    for (const item of chatBody.children) {
      if (data.idsToHide.filter(user => user.id === item.dataset.peer).length > 0)
        item.style.display = 'none'
    }
  })
}

// Try to add controls until successful. Needed for page refresh.
export function createTryToInitInterval() {
  const controlsInterval = setInterval(() => {
    if (!tryToInitControls(controlsInterval))
      clearInterval(controlsInterval)
  }, 200)
  return controlsInterval
}

/**
 *
 * @param message {HTMLElement}
 */
function addControlButton(message) {
  // Check if message is not an outgoing one
  if (!message.classList.contains('im-mess_out')) {
    const actionsArea = message.getElementsByClassName('im-mess--actions')[0]
    if (actionsArea && actionsArea.lastChild.className !== 'im-mess--mute') {
      const senderId = message.parentElement.parentElement.parentElement.dataset.peer
      const muteBtn = addMuteButton(actionsArea, senderId)
      addActionAreaEvents(actionsArea)
      muteBtn.addEventListener('click', setIdToHideHandle)
      return true
    }
    else {
      return false
    }
  }
}

export function tryToInitControls() {
  let status = true
  const chatBody = getChatBody()
  if (!chatBody)
    return false
  for (const item of chatBody.children) {
    if (item.className.includes('im-mess-stack _im_mess_stack')) {
      const messages = item.children[1].children[1].getElementsByClassName('im-mess _im_mess')
      for (const message of messages)
        status = addControlButton(message)
    }
  }
  return status
}
