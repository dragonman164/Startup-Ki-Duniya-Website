import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { useState } from "react";
import CompanyRegisteration from "./CompanyLogin";

const fontStyle = {
  fontWeight: "bold",
  fontSize: "22px",
};

const NavbarStyle = {
  textDecoration: "inherit",
  color: "white",
  fontWeight: "bold",
};

const CompanyNavbar = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <CompanyRegisteration show={show} handleClose={handleClose} />
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="font-weight-bold h5 fixed-top"
      >
        <Navbar.Brand className="mx-2">Startup Ki Duniya</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={fontStyle}>
              <Link to="/companyhome" style={NavbarStyle}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link style={fontStyle}>
              <Link to="/companydashboard" style={NavbarStyle}>
                Dashboard
              </Link>
            </Nav.Link>
            <Nav.Link style={fontStyle}>
              <Link to="/companyapplications" style={NavbarStyle}>
                Application Status
              </Link>
            </Nav.Link>
            <Form inline></Form>
          </Nav>
          <Nav>
            <Button
              className="btn-lg font-weight-bold mx-2 my-1"
              onClick={() => {
                handleShow();
              }}
            >
              Register/Login
            </Button>
            <Route
              render={({ history }) => (
                <Button
                  variant="danger"
                  className="btn-lg font-weight-bold mx-2 my-1"
                  onClick={() => {
                    props.changeNav(0);
                    history.push("/");
                  }}
                >
                  Get Hired
                </Button>
              )}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CompanyNavbar;
