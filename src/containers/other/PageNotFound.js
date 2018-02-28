// Package Imports
import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function PageNotFound(props) {
  return (
    <Row>
      <Col xs={12}>
        <h1>Page Not Found</h1>
        <p>The page you are looking for cannot be found.  <Link to='/'>Click Here</Link> to return to the homepage</p>
      </Col>
    </Row>
  )
}

export default PageNotFound;
