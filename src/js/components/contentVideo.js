import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Record from './record.js';
import Share from './share.js';
import VideoEmbed from './videoEmbed.js';

export default class ContentVideo extends React.Component {
  constructor(props) {
    super(props) 
    this.breakpoints=props.breakpoints
  }
  render() {
    return (
    	<div className='bg-gray-fox pt-3'>
        <Container>
      		<Row className='pb-3'>
            <Col><Record className='bg-gray-dark record px-2 py-1 white' text='AO VIVO NA TV SENADO'></Record></Col>
            <Col className='text-right'><Share></Share></Col>
      		</Row>
          <Row>
            <Col xs={this.props.breakpoint} className='mb-3'>
            {this.props.embed16by9 ?
            <VideoEmbed styleName="embed-responsive-16by9"></VideoEmbed>
            :
            null
            }
            {this.props.embed21by9 ?
            <VideoEmbed styleName="embed-responsive-21by9"></VideoEmbed>
            :
            null
            }
            {this.props.embed4by3 ?
            <VideoEmbed styleName="embed-responsive-4by3"></VideoEmbed>
            :
            null
            }
            {this.props.embed1by1 ?
            <VideoEmbed styleName="embed-responsive-1by1"></VideoEmbed>
            :
            null
            }
            </Col>
            {this.props.textwrapper ?
            <Col className='mb-3'>
              <h1 className="size--medium white border-bottom pb-3">{this.props.title}</h1>
              <p className='cut'>{this.props.text}</p>
            </Col>
            :
            null
            }

          </Row>
        </Container>
    	</div>
    );
  }
}
