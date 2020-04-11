var idToHide;

function hidePeer(peer) {
    chrome.storage.sync.get('idToHide', function(data) {
        idToHide = data.idToHide
    });

    chrome.storage.sync.get('isExtensionOn', function(data) {
        if (data.isExtensionOn) {
            var x = document.querySelectorAll('[data-peer="'+peer+'"]');

            x.forEach(
                function(val) {
                    val.style.display = "none";
                }
            )
        }
    });
}

var interval = window.setInterval(function(){ hidePeer(idToHide) }, 500);
