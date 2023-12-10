import { getChatBody } from '../utils/getChatBody'
import { hideExistingMessages, tryToAddControls } from './controls'

export function addNewMessageEventListener() {
  const chatBody = getChatBody()
  chatBody.addEventListener('DOMNodeInserted', (event) => {
    newMessageHandler(event.target)
  })
}

function newMessageHandler(message) {
  tryToAddControls(message)
  if (message.className === 'im-mess-stack _im_mess_stack ') {
    chrome.storage.sync.get('isExtensionOn', (data) => {
      if (data.isExtensionOn) {
        chrome.storage.sync.get('idsToHide', (data) => {
          if (data.idsToHide.filter(user => user.id === message.dataset.peer).length > 0)
            message.style.display = 'none'
        })
      }
    })
  }
}

export function returnMessagesEventListener() {
  chrome.storage.onChanged.addListener((changes) => {
    const isExtensionOn = changes.isExtensionOn
    const idsToHide = changes.idsToHide
    const chatBody = getChatBody()
    if (isExtensionOn) {
      if (isExtensionOn.newValue === false) {
        for (const item of chatBody.children)
          item.style.display = 'block'
      }
      else {
        hideExistingMessages()
      }
    }
    if (idsToHide) {
      chrome.storage.sync.get('isExtensionOn', (data) => {
        if (data.isExtensionOn) {
          if (idsToHide.newValue.length < idsToHide.oldValue.length) {
            for (const item of chatBody.children) {
              if (idsToHide.newValue.filter(user => user.id === item.dataset.peer).length === 0)
                item.style.display = 'block'
            }
          }
        }
      })
    }
  })
}
