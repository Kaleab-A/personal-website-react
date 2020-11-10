import React, { Component } from "react";
import jsonData from "./data.json";

class SingleProjectView extends Component {
	state = {};
	render() {
		return (
			<div className="col-lg-3 col-6 col-xs-12 cardMain">
				<div
					className="card projectList"
					data-toggle="modal"
					data-target="#projectPreview1"
					id={this.props.singleProject.name}
					onClick={() => this.props.onProjectClick(this.props.singleProject.id)}
				>
					<img className="card-img-top" src={this.props.singleProject.image} />
					<div className="card-body">
						<h5 className="card-title">{jsonData[this.props.singleProject.name + "Title"]}</h5>
						<p className="card-text">{jsonData[this.props.singleProject.name + "Desc"]}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleProjectView;
