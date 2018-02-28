// Package Imports
import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

function Navigation(props) {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <IndexLinkContainer to='/rwhfc-react'>
          <Navbar.Brand>
            Robert W. Hazel For Congress
          </Navbar.Brand>
        </IndexLinkContainer>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/rwhfc-react">
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/rwhfc-react/latest">
            <NavItem eventKey={2}>Latest</NavItem>
          </IndexLinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

// <NavDropdown eventKey={2} title="About" id="projects-dropdown">
//   <IndexLinkContainer to="/projects">
//     <MenuItem eventKey={2.1}>View Projects</MenuItem>
//   </IndexLinkContainer>
//   <IndexLinkContainer to="/projects/create">
//     <MenuItem eventKey={2.2}>Create Project</MenuItem>
//   </IndexLinkContainer>

export default Navigation;
