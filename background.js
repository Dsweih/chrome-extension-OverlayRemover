var urlArray = ['teepr.com', 'buzzhand.com', 'gigacircle.com']
// 相對應url，開啟page action
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	for(var i in urlArray) {
		if(tab.url.indexOf(urlArray[i]) > -1) {
			chrome.pageAction.show(tabId);
		}
	}
});
