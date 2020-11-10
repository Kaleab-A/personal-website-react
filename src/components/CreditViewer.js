import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

class CreditViewer extends Component {
	state = {};
	handleDBClick = () => {
		window.open("https://" + this.props.URL, "_blank");
	};
	render() {
		return (
			<div>
				<span onDoubleClick={this.handleDBClick}>
					<a data-tip="">{this.props.children}</a>
				</span>
				<ReactTooltip place="top" effect="float">
					<p>File Name: {this.props.name}</p>
					<p>File Type: {this.props.type}</p>
					<p>File Size: {this.props.size}</p>
					<p>Dimension: {this.props.dimension}</p>
					<p>
						URL: {this.props.URL} <span className="badge badge-primary">Double Click</span>
					</p>
					<p>Created by: {this.props.creator}</p>
				</ReactTooltip>
			</div>
		);
	}
}

export default CreditViewer;
