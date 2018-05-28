chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        var location = tabs[0].url;
        var substring = "typo3";
        if (location.indexOf(substring) === -1) {
            function cutUrl(str) {
                var matched = str.match(/([^/]*\/){3}/);
                return matched ? matched[0] : str /* or null if you wish */;
            }

            var newURL = cutUrl(location) + "typo3";
            chrome.tabs.create({ url: newURL });
        }
    });
});
