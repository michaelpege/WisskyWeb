import React, {Component} from "react";

export class FeedC extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		name: "pege",
	};
	render() {
		return (
			<div>
				<p>Hello {this.state.name}!</p>
				<button onClick={() => this.setState({name: "bambang"})}>
					Ganti nama jadi bambang
				</button>
			</div>
		);
	}
}
