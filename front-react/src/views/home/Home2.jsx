import React, { Component } from "react";

export default class Home2 extends Component {

	state = {
		legenda: 'Estou no React (Classe)'
	}

	resetLegenda() {
		this.setState({
			legenda: 'Estou no React (Classe)!!'
		})
	}

	render() {
		return (
			<div>
				<h1>Componente Home2</h1>
				<p>{this.props.msg}</p>
				<p>{this.state.legenda}</p>
				<input type="text"
					   value={this.state.legenda}
					   onChange={event => this.setState({ legenda: event.target.value })}
				/>
				<button onClick={() => this.resetLegenda()}>Reset Legenda</button>
			</div>
		)
	}
}
