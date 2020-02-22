import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/statics/Logo.PNG';

const Styles = styled.div`
  .navbar { background-color: #79bac1; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #f1f3f4;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #f1f3f4;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .Navbar__brand-logo{
    margin-right: 0.5rem;
    width: 12%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      {/* <Navbar.Brand href="/">UsoChicamocha</Navbar.Brand> */}
      <img className="Navbar__brand-logo" src={logo} alt="Logo" />
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/table">latestData</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Chart">Chart</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Alltable">Table</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)