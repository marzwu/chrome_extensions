var datas = {};
var tabId = -1;

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		// alert(details.url);
		console.log("Cat intercepted: " + details.url);
		var d = getDic(details.tabId);
		d[details.url] = true;
		// alert(datas.length);
		if(details.tabId == tabId)
			chrome.browserAction.setBadgeText({text: countObject(d) + ''}); 
		//window.open(details.url);
		return true;
	},
	{urls:["<all_urls>"]}
	);

function getDic(tabId){
	var d = datas[tabId];
	if(!d)
	{
		d = {};
		datas[tabId] = d;
	}
	return d;
}

function countObject(o){
	var count = 0;
	for(var i in o)
		++count;
	return count;
}

chrome.tabs.onSelectionChanged.addListener(function(tabId, changeInfo) {   
	this.tabId = tabId;
	});   