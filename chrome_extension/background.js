chrome.browserAction.onClicked.addListener(function(tab){
	console.log("GOP Candidates")
	chrome.tabs.executeScript(null, {
		file: "GOP.js"
	});
});