import React from 'react';
import PlayerList from './PlayerList';
import VideoMain from './VideoMain';
import Chatroom from './Chatroom';
import '../styles/index.css';

export function Home() {
	return (
		<div id="home-page">
				
				<VideoMain />
				<Chatroom />
		</div>
	)
}

export default Home;

// render "home screen"
// includes: navigation, iframe container, chat, playerlist