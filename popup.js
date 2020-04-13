//let disableButton = document.getElementById('disableButton');
let disableCheckbox = document.getElementById('disableCheckbox');
let idToHideDisplay = document.getElementById('idToHide');
let status = document.getElementById('status');
var isExtensionOn;
var idToHide;

var enableText = "Кринж офф";
var disableText = "Кринж он";

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
  idToHideDisplay.innerText = idToHide;
});

disableCheckbox.addEventListener('change', (event) => {
  isExtensionOn = event.target.checked;
  if (event.target.checked) {
    status.innerHTML = enableText;
  } else {
    status.innerHTML = disableText;
  }

  chrome.storage.sync.set({isExtensionOn: isExtensionOn}, function() {
    console.log('isExtensionOn: '+isExtensionOn);
  });
});
