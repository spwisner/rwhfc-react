// Package Imports
import React from 'react';
import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

function Navigation(props) {
  return (
    <Navbar collapseOnSelect inverse fixedTop>
      <Navbar.Header>
        <IndexLinkContainer to='/'>
          <Navbar.Brand>
            Project Manager
          </Navbar.Brand>
        </IndexLinkContainer>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
          <NavDropdown eventKey={2} title="Projects" id="projects-dropdown">
            <IndexLinkContainer to="/projects">
              <MenuItem eventKey={2.1}>View Projects</MenuItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/projects/create">
              <MenuItem eventKey={2.2}>Create Project</MenuItem>
            </IndexLinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;
