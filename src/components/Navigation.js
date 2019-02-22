import React from 'react';
import '../styles/navigation.css'
import PlayerList from './PlayerList';
import { AddPlayer } from './AddPlayer';

export class Navigation extends React.Component {
	render() {
		return (
			<div className="top_nav">
				<nav role="navigation">
				<h1>sR</h1>
					<div id="player-controls">
						<PlayerList />
						<AddPlayer />
					</div>
				</nav>
			</div>
		)

	}
}

export default Navigation;