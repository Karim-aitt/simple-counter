import React from "react";
import ReactDOM from "react-dom";
import SecondCounter from "./SecondCounter.jsx";

//create your first component
const Home = (props) => {
	return (
		<>
			<SecondCounter
				six={props.six}
				five={props.five}
				four={props.four}
				three={props.three}
				two={props.two}
				one={props.one}
			/>
		</>
	);
};

export default Home;
