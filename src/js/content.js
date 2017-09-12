console.log('this is from content script', JSON.parse(document.all.data.dataset.state));
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
