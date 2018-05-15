import React from 'react';
import Iframe from 'react-iframe';

export default class VideoEmbed extends React.Component {
  constructor(props) {
    super(props) 
    this.styleName=props.styleName
  }
  render() {
    return (
    	<div className={`embed-responsive ${ this.props.styleName }`}>
    		<Iframe url="https://www.youtube.com/embed/ROoAf5JU88A"
    		        id="myId"
    		        className="embed-responsive-item"
    		        //display="initial"
    		        //position="relative"
    		        allowFullScreen/>
    	</div>
    );
  }
}