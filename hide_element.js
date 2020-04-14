var idToHide;

var chatBody = document.getElementsByClassName("_im_peer_history im-page-chat-contain")[0];

chatBody.addEventListener('DOMNodeInserted', function(event) {
    if (event.target.className === 'im-mess-stack _im_mess_stack ') {
        chrome.storage.sync.get('idToHide', function(data) {
            idToHide = data.idToHide;
        });

        chrome.storage.sync.get('isExtensionOn', function(data) {
            if (data.isExtensionOn) {
                if (event.target.dataset.peer === idToHide) {
                    event.target.style.display = "none";
                }
            }
        });
    }
});

chrome.storage.sync.get('idToHide', function(data) {
    idToHide = data.idToHide;
});

// Try to hide until successful. Needed for page refresh.
var hideInterval = setInterval(function () {
    var chatBody = document.getElementsByClassName("_im_peer_history im-page-chat-contain")[0];
    for (var item of chatBody.children) {
        if (item.dataset.peer === idToHide) {
            if (item.style.display !== "none") {
                item.style.display = "none";
            } else {
                clearInterval(hideInterval);
            }
        }
    }
}, 200);
