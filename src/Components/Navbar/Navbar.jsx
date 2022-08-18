import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import logoCom from "../Assets/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarPage() {
  return (
    <>
      <Navbar bg="white" expand="lg" className="mb-3 navbarSticyRes">
        <Container fluid>
          <Navbar.Brand href="/home">
            <img className="logoCom" src={logoCom} alt="Img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas id="responsive-navbar-nav" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="responsive-navbar-nav">
                <img className="logoCom" src={logoCom} alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-4">
                <Link className="linkTextDecNone" to="/home">
                  <p className="linkTextDecNone">Bosh Sahifa</p>
                </Link>
                <Link className="linkTextDecNone" to="/about">
                  <p className="linkTextDecNone">Biz Haqimizda</p>
                </Link>
                <Link className="linkTextDecNone" to="/aloqa">
                  <p className="linkTextDecNone">Aloqa</p>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPage;
