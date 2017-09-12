console.log('start',Date.now())
import "../css/popup.css";
import React from "react";
import { render } from "react-dom";
import Popuper from './components/ReadhubPopuper';
//
render(
  <Popuper/>,
  window.document.getElementById("app-container")
);
window.addEventListener('load',function(){
	console.log('loaded=>',Date.now())
});
window.addEventListener('unload',function(){
	console.log('unload');
	console.log(Date.now())
	let bg = chrome.extension.getBackgroundPage();
	bg.popUnload = true;
	if(window.readhubPopuper){
		bg.ifrmReadhub = window.readhubPopuper.refs.ifrmReadhub;
	}
});
