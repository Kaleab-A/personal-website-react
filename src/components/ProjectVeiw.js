import React, { Component } from "react";
import SingleProjectView from "./SingleProjectView";

class ProjectView extends Component {
	state = {};
	render() {
		return (
			<div className="row" id="projectArea">
				{this.props.projectList.map((project) => (
					<SingleProjectView singleProject={project} key={project.id} onProjectClick={(id) => this.props.onProjectClick1(id)} />
				))}
			</div>
		);
	}
}

export default ProjectView;
