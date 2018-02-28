import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FacebookLogo from '../../assets/FindUsOnFacebook.js'
import Mailchimp from '../../components/mailchimp/Mailchimp.js';

export default class Footer extends React.Component {
  render() {
    return (
      <Row className="footer-wrap">
        <Col xs={6}>
          <Mailchimp />
        </Col>
        <Col xs={6}>
          <a href="https://www.facebook.com/Robert-W-Hazel-for-US-Congress-955028871329095/" target="_blank">
            <FacebookLogo />
          </a>
        </Col>
      </Row>
    )
  }
}
