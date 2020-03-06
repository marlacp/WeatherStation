import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/statics/Logo.PNG';
import { Link } from 'react-router-dom';

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
    margin-right: 0.7rem;
    width: 12%;
  }
  .Pad a{
    text-decoration: none;
    padding: 0 10px;
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
          <Nav.Item className="Pad">
            <Link to="/">
              Home
            </Link>
          </Nav.Item> 

          <Nav.Item className="Pad">
            <Link to="/table">
              latestData
            </Link>
          </Nav.Item>

          <Nav.Item className="Pad">
            <Link to="/Chart">
              Chart
            </Link>
          </Nav.Item>

          <Nav.Item className="Pad">
            <Link to="/Alltable">
              Table
            </Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)