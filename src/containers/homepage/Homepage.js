import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Mailchimp from '../../components/mailchimp/Mailchimp.js';
import FacebookLogo from '../../assets/FindUsOnFacebook.js'

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} sm={6}>
            <div className="image-text-container">
              <img src="https://static1.squarespace.com/static/565f8a01e4b0d9b44ab9b66f/t/565f94a2e4b01813eb364fad/1475452074472/" alt="Robert W. Hazel"/>
            </div>
          </Col>
          <Col xs={12} sm={6} className="message-col">
            <div className="message-container">
              <h2 className="message-header">A Message From Robert</h2>
              <div className="text-statement-container">
                <p className="text-statement">I’m an old-fashioned, New Deal Democrat without equivocation, qualification or apology, and I am running for the United States Congress from the MO 2nd District. I abhor the fear, hatred and prejudice prevalent in this country and want instead
                to see us offer Medicare for All, Equal Rights for Everyone, and Common Sense Gun Control, just to name three positions I support. I will not promise you that you will always agree with me, nor even that together we will prevail, for the odds
                are long indeed, and there are powerful forces working against us who want nothing less than to leave us all disheartened, disenfranchised and deeply in debt. Instead, I will promise you only that I give everything I have to give for the good
                of the Republic.</p>
                <div className="text-statement rwh-signature">- Robert W. Hazel</div>
              </div>
            </div>
          </Col>
        </Row>
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
      </div>
    )
  }
}
