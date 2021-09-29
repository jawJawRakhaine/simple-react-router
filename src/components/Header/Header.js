import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link
              className="btn btn-outline-success m-3 fw-bolder fs-5"
              to="/home"
            >
              Home
            </Link>
            <Link
              className="btn btn-outline-success m-3 text-bold fw-bolder fs-5"
              to="/about"
            >
              About
            </Link>
            <Link
              className="btn btn-outline-success m-3 fw-bolder fs-5"
              to="/friends"
            >
              Friends
            </Link>
            <Link
              className="btn btn-outline-success m-3 fw-bolder fs-5"
              to="/about/culture"
            >
              Culture
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
