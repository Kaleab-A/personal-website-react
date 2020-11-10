import React, { Component } from "react";
import { useEffect, useState } from "react";

const AddComments = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://spreadsheets.google.com/feeds/cells/11wjCNQwDPQ3c_6zesa7B2eHip4cHSiO57oTVdTf_o5c/1/public/values?alt=json-in-script&callback=doData";
		script.async = true;
		script.type = "module";
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);
	const [commentMap, setCommentMap] = useState(null);
	var spData = JSON.parse(localStorage.getItem("dataSP"));
	var commentTable;
	var renderCommentList = [];
	function updateComments() {
		commentTable = [];
		function readData() {
			var data = spData;
			var rowData = [];
			for (var r = 0; r < data.length; r++) {
				var cell = data[r]["gs$cell"];
				var val = cell["$t"];
				if (cell.col == 1) {
					commentTable.push(rowData);
					rowData = [];
				}
				rowData.push(val);
			}
			commentTable.push(rowData);
		}
		readData();
		setTimeout(() => {
			for (let index = 2; index < commentTable.length; index++) {
				const element = commentTable[index];
				renderCommentList.push({ time: element[0], name: element[1], comment: element[2] });
			}
			setCommentMap(
				renderCommentList.map((singleComment) => (
					<div className="comments" key={singleComment}>
						<h5 className="card-title">
							{singleComment.name} <span>({singleComment.time})</span>
						</h5>
						<p className="card-text">{singleComment.comment}</p>
					</div>
				))
			);
		}, 50);
	}
	setTimeout(() => {
		updateComments();
	}, 2000);
	setTimeout(() => {
		console.log("Reloading...");
		window.location.reload();
	}, 50 * 1000);
	return commentMap ? <div>{commentMap}</div> : <p>Loading</p>;
};

export default AddComments;
