import React from 'react';
import {Row, Col} from 'react-bootstrap'
import CarouselComp from '../../components/carousel/Carousel.js';
import Footer from '../footer/Footer.js'

export default class Latest extends React.Component {
  render() {
    return (
      <div>
        <Row className="white-background">
        <Col xs={12} sm={6}>
          <h2 className="message-header">I'm on the Ballot</h2>
          <p className="register">I am on the ballot as a Democratic Candidate
          for the US House of Representatives from the MO 2nd, as of earlier today.</p>
          <p className="register">If you haven't already done so, <a href="https://www.sos.mo.gov/elections/goVoteMissouri/register" target="_blank" rel="noopener noreferrer">register to vote</a> and vote!.  Almost half of us didn't bother to cast a ballot in 2016 and look what that gave us!  We need everyone, who might Vote Blue, to come to polls, especially those of us in the Missouri 2nd!</p>
        </Col>
          <Col xs={12} sm={6}>
            <CarouselComp />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Footer />
          </Col>
        </Row>
      </div>
    )
  }
}
