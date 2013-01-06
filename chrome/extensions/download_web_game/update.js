// JavaScript Document
var bgpg;
var tabId;

function update(){
	bgpg = chrome.extension.getBackgroundPage();
	var d = bgpg.getDic(tabId);
	document.getElementById('count').innerHTML = bgpg.countObject(d) + '';
}

$(function(){
	chrome.tabs.getSelected(null, function(tab){
		tabId = tab.id;
		bgpg.tabId = tabId;
		}
		);
		
	update();
	
	//$("#download").click(function(){
		//save('urls.txt', 'hello world');
 	//});
	
	$("div").click(function(){
		var bgpg = chrome.extension.getBackgroundPage();
		var str = '';
		var d = bgpg.getDic(tabId);
		for(var i in d)
			str += i + '\n';
				
		save('urls.txt', str);
 	});
});
 
