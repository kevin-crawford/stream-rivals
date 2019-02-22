import React from 'react';

export class AddPlayer extends React.Component {

	handleClick = () => {
		console.log('adding player', this);
	}
	render () {

		return (
			
				<button id="addPlayer" onClick={this.handleClick}>
					<span>+</span>
				</button>
		)
	}

}

export default AddPlayer;