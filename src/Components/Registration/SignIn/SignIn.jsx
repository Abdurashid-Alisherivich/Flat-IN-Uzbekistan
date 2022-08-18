import React from "react";
import signIn from "../../Assets/siginIn.jpg";
import Container from 'react-bootstrap/Container';
import logoCom from '../../Assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./SignIn.css";

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);



  const submit = async e => {
    e.preventDefault();

    const {data} = await axios.post('login/', {
      email, password
    }, { withCredentials: true });
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`

    setNavigate(true);
  }

  if (navigate) {
    return <Navigate to="/Home" />
  }

  return (
    <div>
    <Navbar bg="white" expand="lg" className="mb-3 navbarSticyRes">
        <Container fluid>
          <Navbar.Brand href="/home"><img className='logoCom' src={logoCom} alt="Img" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas
            id="responsive-navbar-nav"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="responsive-navbar-nav">
                <img className='logoCom' src={logoCom} alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    <div className="signInWrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={signIn} alt="" />
            <Link to="/signUp">
              <p className="accountBor">Profil yaratish</p>
            </Link>
          </div>
          <div classname="col-sm-12 col-md-6 col-lg-6 container ">
            <h1>Profilga kirish</h1>
            <form className="mt-5" onSubmit={submit}>
              <input
                type="email"
                className="form-control w-75"
                placeholder="Email kiriting"
                aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control mt-2 w-75"
                placeholder="Parol kiriting"
                aria-label="surname"
                aria-describedby="basic-addon1"
                  onChange={e => setPassword(e.target.value)}
              />
              <button type="submit" className="btn btn-primary btn-lg mt-2">
                Kirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
