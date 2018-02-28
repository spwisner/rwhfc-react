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
          <h2 className="message-header">Register to Vote</h2>
          <p className="register">If you haven't already done so, <a href="https://www.sos.mo.gov/elections/goVoteMissouri/register" target="_blank">register to vote</a> and vote!.  Almost half of us didn't bother to cast a ballot in 2016 and look what that gave us!  We need everyone, who might Vote Blue, to come to polls, especially those of us in the Missouri 2nd!</p>
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
