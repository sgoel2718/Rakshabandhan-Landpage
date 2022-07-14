import React, { Component } from "react";
import ReactPlayer from "react-player";
import Slider from './Slider';

class Video extends Component {
	render() {
		return (
			<>
				<div className="player-wrapper">
					<ReactPlayer
						className="react-player fixed-bottom"
						url="video.mp4"
						width="100%"
						height="100%"
						controls={true}
					/>
				</div>
                <Slider/>
			</>
		);
	}
}

export default Video;
