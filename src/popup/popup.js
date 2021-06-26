import './popup.css'

//let disableButton = document.getElementById('disableButton');
let disableCheckbox = document.getElementById('disableCheckbox');
let idToHideDisplay = document.getElementsByClassName('idToHide');
let idList = document.getElementById("id_list");
let status = document.getElementById('status');
let isExtensionOn;
let idToHide = [];

let enableText = "Кринж офф";
let disableText = "Кринж он";

function idBtnHTML(id) {
    const element = document.createElement('div');
    element.setAttribute('class', 'idToHide');
    element.innerHTML = id;
    return element;
}

chrome.storage.sync.get('isExtensionOn', function(data) {
    isExtensionOn = data.isExtensionOn;

    disableCheckbox.checked = isExtensionOn;
    if (isExtensionOn) {
        status.innerHTML = enableText;
    } else {
        status.innerHTML = disableText;
    }
});

chrome.storage.sync.get('idToHide', function(data) {
    idToHide = data.idToHide;
    for (const id in idToHide) {
        const row = idBtnHTML(idToHide[id]);
        idList.appendChild(row);
    }
    for (const element of idToHideDisplay) {
        element.addEventListener('click', function() {
            const index = idToHide.indexOf(element.innerText)
            if (index > -1) {
                idToHide.splice(index, 1);
            }
            chrome.storage.sync.set({idToHide: idToHide}, function() {
                element.innerText = '';
                console.log('Cleared idToHide');
            });
        });
    };    
});

disableCheckbox.addEventListener('change', (event) => {
    isExtensionOn = event.target.checked;
    if (event.target.checked) {
        status.innerHTML = enableText;
    } else {
        status.innerHTML = disableText;
    }

    chrome.storage.sync.set({isExtensionOn}, function() {
        console.log('isExtensionOn: '+isExtensionOn);
    });
});