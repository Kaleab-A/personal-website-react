import React, { Component } from "react";
import jsonData from "./data.json";
import aboutImage from "../Images/aboutImage.jpg";
import CreditViewer from "./CreditViewer";

class AboutSection extends Component {
	state = {};
	render() {
		return (
			<div>
				<a id="about"></a>
				<br />
				<hr />
				<div className="about-me">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<div className="about-image">
									<CreditViewer
										name="aboutImage.jpg"
										type="Image/jpg"
										size="133 KB"
										dimension="1740 x 1248 px"
										URL="shorturl.at/pruK5"
										creator="stories"
									>
										<img id="aboutImage" className="img-fluid" src={aboutImage} /> />
									</CreditViewer>
								</div>
							</div>
							<div className="col-lg-6 col-md-12" id="about-title">
								<h2 className="pt-5">
									<span>Please Meet</span>
									<span className="fullName font-weight-bold">{jsonData.fullName}</span>
								</h2>
								<div className="paragraph py-4 w-100">
									<div id="desc" dangerouslySetInnerHTML={{ __html: jsonData.desc }} />
									<p id="desc1">{jsonData["desc1"]}</p>
									<button type="button" className="btn primary-button" id="contactButton" onClick={this.props.toContact}>
										Contact
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutSection;
