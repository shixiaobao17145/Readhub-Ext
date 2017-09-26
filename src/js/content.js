console.log('this is from content script',window.dvaApp);
window.onload = function(){
	chrome.runtime.sendMessage({data:{action:'inject_script'}},function(response){
		console.log('get response', response);
	});
	document.addEventListener('transfer', function(e){
		console.log('e.detail', e.detail);
	});
	document.dispatchEvent(new CustomEvent('transfer', {detail:window.dvaApp}));
}
import CONST from './constant'
let isInPopup = false;
//temp solution, later we will use the post message solution
if(window.top != window){
	isInPopup = true;
}

window.addEventListener('message', function(evt){
	let { data = {} } = evt;
	if(data.action == CONST.ACTION_TYPES.PING && data.from == CONST.ROLES.POPUP){
		isInPopup = true;
	}
});

console.log('isInPopup', isInPopup);
