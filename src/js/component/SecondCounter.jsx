import React from "react";
import ReactDOM from "react-dom";

function SecondCounter(props) {
	return (
		<div className="bigCounter">
			<div className="">
				<i class="far fa-clock"></i>
			</div>
			<div className="six">{props.six % 10}</div>
			<div className="five">{props.five % 10}</div>
			<div className="four">{props.four % 10}</div>
			<div className="three">{props.three % 10}</div>
			<div className="two">{props.two % 10}</div>
			<div className="one">{props.one % 10}</div>
		</div>
	);
}

export default SecondCounter;
