import '../img/icon-128.png'
import '../img/icon-32.png'
window.isBg = true;
chrome.runtime.onMessage.addListener(function(req, sender, sendResponse){
	let data = req.data;
	let { action } = data;
	if(action == 'inject_script'){
		chrome.tabs.executeScript(null, {code:'document.body.style.backgroundColor="red";window.dvaApp'},function(rtn){
			console.log('hahaha',rtn);
		});
		sendResponse({result:'done'});
	}
});

