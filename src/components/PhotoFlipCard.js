import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import myPhoto from "../Images/myPhoto_lg.png";
import ContactIcons from "./ContactIcons";

class PhotoFlipCard extends Component {
	state = {
		isFlipped: false,
	};

	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
	}

	render() {
		return (
			<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
				<div>
					<button onClick={this.handleClick} className="btn" style={{ width: 300 }}>
						Click to flip
					</button>
					<img id="myPhoto" alt="My Photo" style={{ width: 300, height: 404 }} src={myPhoto} />
				</div>

				<div className="flipCardBack">
					<button onClick={this.handleClick} className="btn" style={{ width: 300 }}>
						Click to flip
					</button>
					<br />
					<br />
					<h1>Kaleab Asfaw</h1>
					<h5>High School Student</h5>
					<hr />
					<h3>Love Programming</h3>
					<hr />
					<div style={{ height: 110 }}></div>
					<ContactIcons />
				</div>
			</ReactCardFlip>
		);
	}
}

export default PhotoFlipCard;
