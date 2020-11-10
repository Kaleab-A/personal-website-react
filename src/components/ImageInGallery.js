import React, { Component } from "react";

class ImageInGallery extends Component {
    state = {};
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="icon-div">
                    <img className="img-icon" src={this.props.singleImage} />
                </div>
            </div>
        );
    }
}

export default ImageInGallery;
