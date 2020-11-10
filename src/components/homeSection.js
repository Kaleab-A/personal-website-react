import React, { Component } from "react";
import jsonData from "./data.json";
import homeImage from "../Images/programming.jpg";
import CreditViewer from "./CreditViewer";

class HomeSection extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="frontPage" id="titleSection">
					<div className="container">
						<div className="row">
							<div className="col-lg-2"></div>
							<div className="col-lg-4 text-left">
								<div style={{ fontFamily: "Bungee Shade" }}>
									<h1 className="title-main-text name" id="titleName">
										I am -----
									</h1>
									<h1 className="nameTitle">{jsonData["name"]}</h1>
								</div>
								<h4 className="subtitle-text text-uppercase" id="titleJob">
									{jsonData["job"]}
								</h4>
								<br />
								<br />
								<div className="title-button">
									<div className="">
										<button type="button" className="btn button primary-button text-uppercase" onClick={this.props.toAbout}>
											About Me
										</button>
										<button type="button" className="btn button secondary-button text-uppercase" onClick={this.props.toContact}>
											Contact
										</button>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-mid-12">
								<CreditViewer
									name="programming.jpg"
									type="Image/jpg"
									size="334 KB"
									dimension="1816 x 1912 px"
									URL="shorturl.at/fyCHX"
									creator="stories"
								>
									<img id="homeImage" className="img-fluid" src={homeImage} />
								</CreditViewer>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default HomeSection;
