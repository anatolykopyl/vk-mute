import './popup.css'

//let disableButton = document.getElementById('disableButton');
let disableCheckbox = document.getElementById('disableCheckbox');
let idsToHideElements = document.getElementsByClassName('idToHide');
let idList = document.getElementById("id_list");
let isExtensionOn;
let idsToHide = [];

function idBtnHTML(id) {
    const element = document.createElement('div');
    element.setAttribute('class', 'idToHide');
    element.innerHTML = `
        <a href="https://vk.com/id${id}" target="_blank" title="Перейти в профиль">🤐 id${id}</a>
        <span class="del_item" title="Удалить">🗑️</span>
    `;
    element.id = id;
    return element;
}

chrome.storage.sync.get('isExtensionOn', function(data) {
    isExtensionOn = data.isExtensionOn;

    disableCheckbox.checked = isExtensionOn;
});

chrome.storage.sync.get('idsToHide', function(data) {
    idsToHide = data.idsToHide;
    for (const id in idsToHide) {
        const row = idBtnHTML(idsToHide[id]);
        idList.appendChild(row);
    }
    for (const element of idsToHideElements) {
        for (const child of element.childNodes) {
            if (child.className === "del_item") {
                child.addEventListener('click', function() {
                    const index = idsToHide.indexOf(element.id)
                    if (index > -1) {
                        idsToHide.splice(index, 1);
                    }
                    chrome.storage.sync.set({idsToHide: idsToHide}, function() {
                        element.remove();
                        console.log('Cleared idsToHide');
                    });
                });
            }
        }
    };    
});

disableCheckbox.addEventListener('change', (event) => {
    isExtensionOn = event.target.checked;

    chrome.storage.sync.set({isExtensionOn}, function() {
        console.log('isExtensionOn: '+isExtensionOn);
    });
});