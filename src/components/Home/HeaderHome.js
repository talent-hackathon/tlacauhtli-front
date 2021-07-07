import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavDropdown } from "react-bootstrap";

const HeaderHome = () => {
  return (
    <header>
      <Navbar bg="none" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mt-3">
            <Nav>
              <Nav.Link href="/" id="txtLink">
                Home
              </Nav.Link>
              <Nav.Link href="/store" id="txtLink">
                Tienda
              </Nav.Link>
              <Nav.Link href="/" id="txtLink">
                Historia
              </Nav.Link>
              <Nav.Link href="/" id="txtLink">
                Contacto
              </Nav.Link>
              <NavDropdown title="Profile" id="txtLink">
                <NavDropdown.Item href="#LogIn">Log In</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#SignUp">Sign Up</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderHome;
