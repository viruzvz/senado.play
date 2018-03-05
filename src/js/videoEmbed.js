import React from 'react';
import Iframe from 'react-iframe';

export default class VideoEmbed extends React.Component {
  render() {
    return (
    	<div className="embed-responsive embed-responsive-21by9">
		<Iframe url="https://www.youtube.com/embed/0WWzgGyAH6Y"
		        id="myId"
		        className="embed-responsive-item"
		        //display="initial"
		        //position="relative"
		        allowFullScreen/>
		</div>
    );
  }
}