chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        const location = tabs[0].url;
        const substring = "typo3";

        const cutUrl = str => {
            const matched = str.match(/([^/]*\/){3}/);
            return matched ? matched[0] : str /* or null if you wish */;
        };

        if (location.indexOf(substring) === -1) {
            const newURL = cutUrl(location) + "typo3";
            chrome.tabs.create({ url: newURL });
        } else {
            chrome.tabs.create({ url: cutUrl(location) });
        }
    });
});
