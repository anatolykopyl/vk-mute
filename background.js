chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ isExtensionOn: true }, function () {
        console.log('isExtensionOn: ' + true);
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'vk.com' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});