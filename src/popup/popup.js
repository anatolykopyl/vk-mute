import './popup.css'

const disableCheckbox = document.getElementById('disableCheckbox')
const idsToHideElements = document.getElementsByClassName('idToHide')
const idList = document.getElementById('id_list')
let isExtensionOn
let idsToHide = []

function idBtnHTML(user) {
  const element = document.createElement('div')
  element.setAttribute('class', 'idToHide')
  element.innerHTML = `
        <a href="https://vk.com/id${user.id}" target="_blank" title="Перейти в профиль">🤐 ${user.name}</a>
        <span class="del_item" title="Удалить">🗑️</span>
    `
  element.id = user.id
  return element
}

chrome.storage.sync.get('isExtensionOn', (data) => {
  isExtensionOn = data.isExtensionOn

  disableCheckbox.checked = isExtensionOn
})

chrome.storage.sync.get('idsToHide', (data) => {
  idsToHide = data.idsToHide
  for (const id in idsToHide) {
    const row = idBtnHTML(idsToHide[id])
    idList.appendChild(row)
  }

  for (const element of idsToHideElements) {
    for (const child of element.childNodes) {
      if (child.className === 'del_item') {
        child.addEventListener('click', () => {
          idsToHide = idsToHide.filter(user => user.id !== element.id)
          chrome.storage.sync.set({ idsToHide }, () => {
            element.remove()
          })
        })
      }
    }
  }
})

disableCheckbox.addEventListener('change', (event) => {
  isExtensionOn = event.target.checked

  chrome.storage.sync.set({ isExtensionOn })
})
