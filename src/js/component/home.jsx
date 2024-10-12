import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (<>
		<NavBar />
		<div className="container">
			<Jumbotron />
			<div className="row">
				<div className="col-lg-3 col-md-6 col-sm-12 p-2">
					<Card />
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 p-2">
					<Card />
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 p-2">
					<Card />
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 p-2">
					<Card />
				</div>
			</div>
		</div>
		<Footer />
	</>
	);
};

export default Home;
