import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [lightRed, setLightRed] = useState("bg-opacity-25");
	const [lightYellow, setLightYellow] = useState("bg-opacity-25");
	const [lightGreen, setLightGreen] = useState("bg-opacity-100");
	const [lightPurple, setLightPurple] = useState("none");
	const [trafficHeight, setTrafficHeight] = useState(32);

	const LightRed = () => {
		setLightRed("bg-opacity-100");

		setLightYellow("bg-opacity-25");
		setLightGreen("bg-opacity-25");
	}

	const LightYellow = () => {
		setLightYellow("bg-opacity-100");

		setLightRed("bg-opacity-25");
		setLightGreen("bg-opacity-25");
	}

	const LightGreen = () => {
		setLightGreen("bg-opacity-100");

		setLightYellow("bg-opacity-25");
		setLightRed("bg-opacity-25");
	}

	const changeLight = () => {
		
		if (lightRed === "bg-opacity-100"){LightGreen();}
		else if (lightYellow === "bg-opacity-100"){LightRed();}
		else {LightYellow();}
	}

	const addPurple = () => {
		setLightPurple("block")
		setTrafficHeight(38);
	}
	


	return (
		<div className="text-center">
			<div className="row justify-content-center" id="trafficTop">
				<span 
				className="placeholder" 
				style={{backgroundColor:"black", width:10+"px", height:100+"px"}}>

				</span>
			</div>
			<div className="row justify-content-center" id="trafficLight">
				<div className="col-3 bg-dark" style={{backgroundColor:"black", height:trafficHeight+"em", width: 200+"px"}}>
					<div className={`bg-danger ${lightRed} rounded-circle m-2 mt-5`} id="red" style={{height:8+"em"}} onClick={LightRed}></div>
					<div className={`bg-warning ${lightYellow} rounded-circle m-2`} id="yellow" style={{height:8+"em"}} onClick={LightYellow}></div>
					<div className={`bg-success ${lightGreen} rounded-circle m-2`} id="green" style={{height:8+"em"}} onClick={LightGreen}></div>
					<div className={`${lightGreen} rounded-circle m-2`} id="purple" style={{height:8+"em", display: lightPurple, backgroundColor: "purple"}}></div>
				</div>

			</div>

			<div className="row justify-content-center m-3" id="buttons">

				<button className="btn btn-primary" type="button" style={{width:80+"px"}} onClick={changeLight}>Change</button>
				<button className="btn btn-primary" type="button" style={{width:80+"px"}} onClick={addPurple}>Add</button>
			</div>
		</div>
	);
};

export default Home;
