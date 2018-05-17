import React from 'react';

export default class SocialNetwork extends React.Component {
  render() {
    return (
      <span>
        <a href='#' target='_blank' className='size--small mx-2 link--cut' title='Facebook'><i className='fa fa-facebook'></i> </a>
        <a href='#' target='_blank' className='size--small mx-2 link--cut' title='Twitter'><i className='fa fa-twitter'></i> </a>
        <a href='#' target='_blank' className='size--small mx-2 link--cut' title='Instagram'><i className='fa fa-instagram'></i> </a>
        <a href='#' target='_blank' className='size--small mx-2 link--cut' title='Flickr'><i className='fa fa-flickr'></i> </a>
        <a href='#' target='_blank' className='size--small link--cut ml-2 mr-0' title='Youtube'><i className='fa fa-youtube'></i> </a>
      </span>
    );
  }
}
