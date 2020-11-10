import React, { Component } from "react";
import ImageInGallery from "./ImageInGallery";

class ImageGallery extends Component {
	state = {};
	render() {
		return (
			<div className="row no-gutters" id="languages">
				{this.props.imageList.map((image) => (
					<ImageInGallery key={image.id} singleImage={image.logo} />
				))}
			</div>
		);
	}
}

export default ImageGallery;
