import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class NavBar extends Component {
	state = {
		tabs: [
			{ id: 0, name: "Home" },
			{ id: 1, name: "About" },
			{ id: 2, name: "Experience" },
			{ id: 3, name: "Projects" },
			{ id: 4, name: "Contact" },
		],
		active: "Home",
	};

	generateTabs = () => {
		const listItems = this.state.tabs.map((tab) => (
			<li className="nav-item mx-3" key={tab.id}>
				<a className="nav-link" href={tab.name == "Home" ? "#" : "#" + tab.name.toLowerCase()}>
					{tab.name}{" "}
				</a>
			</li>
		));
		return <ul className="navbar-nav">{listItems}</ul>;
	};

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " id="mainNav">
				<a className="navbar-brand" href="#">
					<img id="logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
					<span className="sr-only">Toggle navigation</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="mr-auto"></div>
					{this.generateTabs()}
				</div>
			</nav>
		);
	}
}

export default NavBar;
