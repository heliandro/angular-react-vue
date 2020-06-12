import React, { useState} from 'react';
import './Home.css';

// Heact Hooks
export default (props) => {
	// two-way data binding utiliza o useState
	let [legenda, setLegenda] = useState('Estou no React');

	function resetLegenda() {
		setLegenda('Estou no React');
	}

	// two way data bind >>>> e => setLegenda(e.target.value)
	return (
		<div className="home">
			<h1>Hello World React!!</h1>
			<p>{props.msg}</p>
			<h2>{legenda}</h2>
			<input type="text" value={legenda} onChange={ e => setLegenda(e.target.value) } />
			<button onClick={resetLegenda}>Reset Legenda</button>
		</div>
	)
}
