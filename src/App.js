import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [number, setNumber] = useState(0);
	const [data, setData] = useState();

	const addNumber = () => {
		setNumber((prevState) => prevState + 1);
	};

	// useEffect(() => {
	// 	axios
	// 		.get('https://api.agify.io?name=bella')
	// 		.then(function (response) {
	// 			setData(response.data);
	// 		})
	// 		.catch(console.log('Tangina'));
	// }, []);

	useEffect(() => {
		fetch('https://api.agify.io?name=bella')
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<div className="App">
			<p>Hi</p>
			<button onClick={() => addNumber()}>Click me</button>
			<p>{number}</p>
		</div>
	);
}

export default App;
