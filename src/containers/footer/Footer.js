import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FacebookLogo from '../../assets/FindUsOnFacebook.js'

export default class Footer extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <FacebookLogo />
        </Col>
      </Row>
    )
  }
}
