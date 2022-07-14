import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import rakhi1 from "./components/rakh1.jpg";

function App() {
	return (
		<div className="App">
			<Navbar />
			<img className="im" src={rakhi1} alt="rakhi" />
			<h2>Discover the colourful world</h2>
			<h1>Buy Yourself The Freedom</h1>
			<Cards />
		</div>
	);
}

export default App;
