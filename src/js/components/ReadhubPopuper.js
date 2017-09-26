import React from "react";
import { render, findDOMNode } from "react-dom";
import { CircularProgress } from 'material-ui/Progress';
export default class ReadhubPopuper extends React.Component{
	constructor(props){
		super(props);
		this.state={
			ready:false
		}
	}
	componentDidMount(){
		console.log('didMount',Date.now())
		window.addEventListener('load', ()=>{
			console.log('loaded in component', Date.now());
			let bg = chrome.extension.getBackgroundPage();
			setTimeout(()=>
				this.setState({
					ready:true
				}), 6);
			window.readhubPopuper = this;
		});
	}
	onIframeLoad(){
		console.log('iframe loaded');
		this.setState({
			loaded:true
		});
	}
	renderLoading(){
		let cls = ["loading"];
		if(this.state.loaded || true){
			cls.push('loaded');
		}
		return (
			<div className={cls.join(' ')}>
				<CircularProgress size={50} />
			</div>);
	}
	renderIframe(){
		if(this.state.ready){
			let cls = [];
			if(this.state.loaded){
				cls.push('loaded');
				console.log('update iframe class name');
			}
			return <iframe src="https://readhub.me" ref="ifrmReadhub" name="ifrmReadhub" className={cls.join(' ')} onLoad={()=>this.onIframeLoad()}> </iframe>
		}
	}
	render(){
		return (
			<div>
				{this.renderLoading()}
				{this.renderIframe()}
			</div>
		);
	}
}
