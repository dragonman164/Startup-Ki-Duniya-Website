import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { useState } from "react";
import UserRegistrationModal from "./UserLogin";

const fontStyle = {
  fontWeight: "bold",
  fontSize: "22px",
};

const NavbarStyle = {
  textDecoration: "inherit",
  color: "black",
  fontWeight: "bold",
};

const NavBar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <UserRegistrationModal show={show} handleClose={handleClose} />
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="font-weight-bold h5 fixed-top"
      >
        <Navbar.Brand className="mx-2">Startup Ki Duniya</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="ml-5" style={fontStyle}>
              <Link to="/" style={NavbarStyle}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link style={fontStyle}>
              <Link to="/dashboard" style={NavbarStyle}>
                Dashboard
              </Link>
            </Nav.Link>
            <Nav.Link style={fontStyle}>
              <Link to="/applicationstatus" style={NavbarStyle}>
                Application Status
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="outline-primary"
              className="btn-lg font-weight-bold mx-2 my-1"
              onClick={() => {
                handleShow();
              }}
            >
              User Register/Login
            </Button>
            <Route
              render={({ history }) => (
                <Button
                  variant="primary"
                  className="btn-lg font-weight-bold mx-2 my-1"
                  onClick={() => {
                    props.changeNav(1);
                    history.push("/companyhome");
                  }}
                >
                  Manage Startup
                </Button>
              )}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
