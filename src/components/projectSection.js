import React, { Component } from "react";
import project0Img from "../Images/projects/project0.png";
import project1Img from "../Images/projects/project1.png";
import project2Img from "../Images/projects/project2.png";
import project3Img from "../Images/projects/project3.png";
import project0Gif from "../Images/projects/project0.gif";
import project1Gif from "../Images/projects/project1.gif";
import project2Gif from "../Images/projects/project2.gif";
import project3Gif from "../Images/projects/project3.gif";
import jsonData from "./data.json";
import ProjectView from "./ProjectVeiw";

class ProjectSection extends Component {
	state = {
		projectsID: [
			{ id: 0, name: "project0", image: project0Img, gif: project0Gif },
			{ id: 1, name: "project1", image: project1Img, gif: project1Gif },
			{ id: 2, name: "project2", image: project2Img, gif: project2Gif },
			{ id: 3, name: "project3", image: project3Img, gif: project3Gif },
		],
		activeProjectTitle: null,
		activeProjectImage: null,
		activeProjectLink: null,
	};

	handleProjectPreview = (projectID) => {
		this.state.projectsID.forEach((project) => {
			if (projectID == project.id) {
				this.setState({ activeProjectTitle: jsonData[project.name + "Title"] });
				this.setState({ activeProjectImage: project.gif });
				this.setState({ activeProjectLink: jsonData[project.name + "Link"] });
			}
		});
	};

	render() {
		return (
			<div>
				<a id="projects"></a>
				<hr />
				<div id="projectSecTitle">
					<h1>My Projects</h1>
					<br />
					<h5>These are some of my projects I have made.</h5>
				</div>
				<div id="projectSection">
					<ProjectView projectList={this.state.projectsID} onProjectClick1={(idName) => this.handleProjectPreview(idName)} />
				</div>
				<br />
				<br />

				<div className="modal fade hidden" id="projectPreview1" tabIndex="-1" role="dialog" aria-labelledby="projectPreviewLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content" id="modalContent">
							<div className="modal-header">
								<h5 className="modal-title" id="projectPreviewLabel">
									{this.state.activeProjectTitle}
								</h5>
								<button className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								<img src={this.state.activeProjectImage} style={{ width: 465 }} />
							</div>
							<div className="modal-footer justify-content-center">
								Check out the&nbsp;
								<a href={this.state.activeProjectLink} target="_blank">
									project
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectSection;
