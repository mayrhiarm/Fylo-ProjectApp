import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./images/logo.svg";
import "./Main.css";

const Navbar1 = () => {
  return (
    <div className="nav-bar">
      <Navbar bg="" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link"><a href="">Features</a></Nav.Link>
              <Nav.Link href="#home"><a href="#">Team</a></Nav.Link>
              <Nav.Link href="#home"><a href="#">Sign In</a></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
