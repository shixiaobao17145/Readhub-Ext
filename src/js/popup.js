import "../css/popup.css";
import Greeting from "./popup/greeting_component.jsx";
import React from "react";
import { render } from "react-dom";
import Popuper from './components/ReadhubPopuper';
//
render(
  <Popuper/>,
  window.document.getElementById("app-container")
);
window.addEventListener('load',function(){
	console.log('load');	
});
window.addEventListener('unload',function(){
	console.log('unload');
	let bg = chrome.extension.getBackgroundPage();
	bg.popUnload = true;
	if(window.readhubPopuper){
		bg.ifrmReadhub = window.readhubPopuper.refs.ifrmReadhub;
	}
});
