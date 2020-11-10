import React, { Component } from "react";
import AddComments from "./addComments";

class CommentSection extends Component {
	handleSubmit = () => setTimeout(() => window.location.reload(), 1000);
	render() {
		return (
			<div>
				<div className="card">
					<div className="card-header" style={{ textAlign: "center" }}>
						<h4>Latest Comments</h4>
					</div>
					<div className="card-body" id="commentDiv">
						<AddComments />
					</div>
					<div className="card-footer">
						<div className="row">
							{/* <div className="col-lg-3"></div> */}
							<div className="col-lg-8" style={{ marginLeft: 250 }}>
								<button className="btn btn-primary" type="button" data-toggle="modal" data-target="#addComment">
									Add Comment
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="addComment" tabIndex="-1" role="dialog" aria-labelledby="addCommentLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Add Comment</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form
									name="gform"
									id="gform"
									encType="text/plain"
									action="https://docs.google.com/forms/d/e/1FAIpQLSdCIMJvXAFV1qKlKZEaXOKaG1lwKYZJzWBiHwZumuludb_gkw//formResponse?"
									target="hidden_iframe"
								>
									<input className="form-control" type="text" name="entry.1603982339" id="entry.1603982339" placeholder="User Name" />
									<br />
									<input className="form-control" type="text" name="entry.543864157" id="entry.543864157" placeholder="Comment Here..." />
									<hr />
									<div style={{ textAlign: "right" }}>
										<button type="submit" value="Submit" className="btn btn-primary" id="submitComment" onClick={this.handleSubmit}>
											Send Message
										</button>
									</div>
									<iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CommentSection;
