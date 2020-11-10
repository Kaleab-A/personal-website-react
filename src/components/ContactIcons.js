import React, { Component } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import codeforcesLogoW from "../Images/codeforcesLogoW.png";
import codeforcesLogoB from "../Images/codeforcesLogoB.png";
import ContactIcon from "./ContactIcon";

class ContactIcons extends Component {
	state = {
		icons: [
			{ id: 0, color: "white", iconImg: faTelegramPlane, link: "https://t.me/kaleab_7" },
			{ id: 1, color: "white", iconImg: faEnvelope, link: "https://kaleabasfaw2010@gmail.com" },
			{ id: 2, color: "white", iconImg: faGithub, link: "https://github.com/Kaleab-A" },
		],
		codeforcesIcon: { id: 3, color: "white", iconImg: codeforcesLogoW, link: "https://codeforces.com/profile/kaleabasfaw2010" },
	};

	handleHover = (iconID) => {
		let icons = [...this.state.icons];
		icons.forEach((item, index) => {
			if (item.id == iconID) item.color = "black";
		});
		this.setState({ icons: icons });
	};

	handleHoverOut = (iconID) => {
		let icons = [...this.state.icons];
		icons.forEach((item, index) => {
			if (item.id == iconID) item.color = "white";
		});
		this.setState({ icons: icons });
	};

	handleHoverCodeforces = () => {
		let codeforcesLogo = { id: 3, color: "black", iconImg: codeforcesLogoW, link: "https://codeforces.com/profile/kaleabasfaw2010" };
		this.setState({ codeforcesIcon: codeforcesLogo });
	};

	handleHoverOutCodeforces = () => {
		let codeforcesLogo = { id: 3, color: "white", iconImg: codeforcesLogoB, link: "https://codeforces.com/profile/kaleabasfaw2010" };
		this.setState({ codeforcesIcon: codeforcesLogo });
	};

	render() {
		let iconList = this.state.icons.map((icon1) => (
			<ContactIcon key={icon1.id} icon={icon1} onHover={(iconID) => this.handleHover(iconID)} onHoverOut={(iconID) => this.handleHoverOut(iconID)} />
		));
		return (
			<ul className="list-inline py-2">
				{iconList}
				<li className="list-inline-item" title="Codeforces">
					<a href={this.state.codeforcesIcon.link} target="_blank" className="p-2 fa-lg">
						<img
							src={this.state.codeforcesIcon.iconImg}
							style={{ width: 25, height: "auto" }}
							onMouseEnter={this.handleHoverCodeforces}
							onMouseEnter={this.handleHoverOutCodeforces}
						></img>
					</a>
				</li>
			</ul>
		);
	}
}

export default ContactIcons;
