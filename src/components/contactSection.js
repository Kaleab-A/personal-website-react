import React, { Component } from "react";
import PhotoFlipCard from "./PhotoFlipCard";
import CommentSection from "./CommentSection";

class ContactSection extends Component {
	render() {
		return (
			<div>
				<a id="contact"></a>
				<br />
				<hr />
				<div className="row" id="contactHead">
					<div className="col-sm-12" id="contactTitle">
						<h1>Contact</h1>
					</div>
				</div>
				<div className="row" id="contactSection">
					<div className="col-lg-7 col-7 col-sm-12" id="commentSection">
						<CommentSection />
					</div>

					<div className="col-lg-1 col-1 col-sm-1"></div>
					<div className="col-lg-2 col-2 col-sm-12">
						<div className="flip-card mx-auto" id="flipCard">
							<PhotoFlipCard />
						</div>
					</div>
				</div>
				<br />
				<br />
				<br />
			</div>
		);
	}
}

export default ContactSection;
