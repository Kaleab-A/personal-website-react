import React, { Component } from "react";
import pythonLogo from "../Images/programmingLanguage/pythonLogo.jpg";
import cppLogo from "../Images/programmingLanguage/cppLogo.png";
import cssLogo from "../Images/programmingLanguage/cssLogo.png";
import htmlLogo from "../Images/programmingLanguage/htmlLogo.png";
import jsLogo from "../Images/programmingLanguage/jsLogo.png";
import unknown from "../Images/programmingLanguage/unknown.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "./ImageGallery";

class ExperienceSection extends Component {
    state = {
        imageList: [
            { id: 0, logo: pythonLogo },
            { id: 1, logo: cppLogo },
            { id: 2, logo: htmlLogo },
            { id: 3, logo: cssLogo },
            { id: 4, logo: jsLogo },
            { id: 5, logo: unknown },
        ],
    };

    render() {
        return (
            <React.Fragment>
                <a id="experience"></a>
                <hr />
                <div className="brand-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <ImageGallery
                                    imageList={this.state.imageList}
                                />
                            </div>
                            <div
                                className="col-xl-6 col-lg-12 col-md-12"
                                style={{
                                    backgroundImage: `url('https://raw.githubusercontent.com/Kaleab-A/personalWebsite/main/src/Images/expSecBg.png')`,
                                    backgroundRepeat: "no-repeat",
                                }}
                                id="expDiv"
                            >
                                <div id="experience-area">
                                    <div className="d-flex flex-row count-area">
                                        <h1 className="px-5" id="counts">
                                            5
                                        </h1>
                                        <h2>
                                            <span>Programming</span>
                                            <span>Languages</span>
                                        </h2>
                                    </div>
                                    <div className="d-flex flex-row flex-wrap call-area">
                                        <span className="fas fa-phone-alt fa-3x"></span>
                                        <i className="fa fa-spin fas fa-phone-volume"></i>
                                        <i className="fas fa-phone-volume"></i>
                                        <FontAwesomeIcon
                                            icon={faPhoneAlt}
                                            size="3x"
                                        />
                                        <div className="call-now">
                                            <a
                                                href="https://globfone.com/call-phone/"
                                                className="h4 text-uppercase "
                                                target="_blank"
                                            >
                                                Call Now
                                            </a>
                                            <p className="py-2">
                                                (+251)-900-640-922
                                            </p>
                                        </div>
                                        <div id="redBg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ExperienceSection;
