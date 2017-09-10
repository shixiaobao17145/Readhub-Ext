import React from "react";
import { render, findDOMNode } from "react-dom";
export default class ReadhubPopuper extends React.Component{
	constructor(props){
		super(props);
		this.state={
			loaded:false
		}
	}
	componentDidMount(){
		window.addEventListener('load', ()=>{
			let bg = chrome.extension.getBackgroundPage();
			this.setState({
				loaded:true,
				ifrmReadHub:bg.ifrmReadHub
			});
			if(bg.ifrmReadHub){
				console.log('append old ifrm');
				debugger;
				document.body.appendChild(bg.ifrmReadHub);
			}
			window.readhubPopuper = this;
		});
	}
	render(){
		let rtn = (<div></div>);
		let { loaded, ifrmReadHub } = this.state;
		if(loaded && !ifrmReadHub){
			rtn = (
				<iframe src="https://readhub.me" ref="ifrmReadhub"> </iframe>
			)
		}
		return rtn;
	}
}
