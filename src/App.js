import React, { Component } from "react";
import NavBar from "./components/navbar";
import HomeSection from "./components/homeSection";
import AboutSection from "./components/aboutSection";
import json from "./components/data.json";
import "./components/style.css";
import ExperienceSection from "./components/experienceSection";
import ProjectSection from "./components/projectSection";
import ContactSection from "./components/contactSection";

class App extends Component {
    state = {
        jsonData: json,
    };

    handleAbout = () => (window.location.href = "#about");
    handleContact = () => (window.location.href = "#contact");

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <HomeSection
                    toAbout={this.handleAbout}
                    toContact={this.handleContact}
                />
                <AboutSection toContact={this.handleContact} />
                <ExperienceSection />
                <ProjectSection />
                <ContactSection />
            </React.Fragment>
        );
    }
}

export default App;
