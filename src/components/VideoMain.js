import React from 'react';
import PlayerStream from './PlayerStream';

export class VideoMain extends React.Component {
	render(props) {

		return (
			<main role="main">
				<PlayerStream 
					layout='video'
					/>
			</main>
		)
	}
}

export default VideoMain;