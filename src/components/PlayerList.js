import React from 'react';


export class PlayerList extends React.Component {
	render() {

		// const players = this.state.players.map((player, index) => 
		// 	<li key={index}>
		// 		<span>{player}</span>
		// 	</li>
		// );
		return (
			<div id="player-list">
				<ul>
					<li>Player</li>
				</ul>
			</div>
		)
	}
}

export default PlayerList;