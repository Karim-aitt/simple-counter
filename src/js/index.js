//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle

import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let segundos = 0;

setInterval(() => {
	const six = Math.floor(segundos / 100000);
	const five = Math.floor(segundos / 10000);
	const four = Math.floor(segundos / 1000);
	const three = Math.floor(segundos / 100);
	const two = Math.floor(segundos / 10);
	const one = Math.floor(segundos / 1);

	ReactDOM.render(
		<Home
			six={six}
			five={five}
			four={four}
			three={three}
			two={two}
			one={one}
		/>,
		document.getElementById("app")
	);

	segundos++;
}, 1000);

//render your react application

//10, 100, 1000, 10000, 100.000
