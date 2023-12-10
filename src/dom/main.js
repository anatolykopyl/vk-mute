import './dom.css'
import { UrlController } from '../utils/Url'
import { createTryToInitInterval, hideExistingMessages, tryToInitControls } from './controls'
import { addNewMessageEventListener, returnMessagesEventListener } from './hide_element'

function init() {
  const url = new UrlController()
  url.onChange(() => {
    if (tryToInitControls()) {
      createTryToInitInterval()
      addNewMessageEventListener()
      returnMessagesEventListener()
      chrome.storage.sync.get('isExtensionOn', (data) => {
        if (data.isExtensionOn)
          hideExistingMessages()
      })
    }
  })
}

init()
