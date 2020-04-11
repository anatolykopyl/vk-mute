//let disableButton = document.getElementById('disableButton');
let disableCheckbox = document.getElementById('disableCheckbox');
let idToHideInput = document.getElementById('idToHide');
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
  idToHideInput.value = idToHide;
});


/*disableButton.onclick = function(element) {
  isExtensionOn = !isExtensionOn;
  if (isExtensionOn) {
    status.innerHTML = "Enabled";
  } else {
    status.innerHTML = "Disabled";
  }

  chrome.storage.sync.set({isExtensionOn: isExtensionOn}, function() {
    console.log('isExtensionOn: '+isExtensionOn);
  });
};*/

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

idToHideInput.addEventListener('input', (event) => {
  chrome.storage.sync.set({idToHide: idToHideInput.value}, function() {
    console.log('idToHide: '+idToHideInput.value);
  });
});

