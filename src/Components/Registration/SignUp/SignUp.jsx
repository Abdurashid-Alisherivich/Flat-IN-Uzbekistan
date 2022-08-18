import React from "react";
import Container from 'react-bootstrap/Container';
import logoCom from '../../Assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import signUp from "../../Assets/signUp.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {  toast } from 'react-toastify';
import { Navigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {

  // const notify = () => toast("Wow so easy!");


  const [name, setName] = useState('');
  const [userName, setUseName] = useState('');
  const [status, setStatus] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);



  const submit = async e => {
    e.preventDefault();

     axios.post('reg/', {
      name,
      userName,
      email,
      phone_number,
      password,
      status,
    }).then((res) => {
      if (res.status === 200) {
        setNavigate(true);
        toast.success('Congratulation 🎉🎉🎉', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }).catch(err => 
      console.log("ERRRRRRRRRRRRRR  : ", err)
    );
  }

  if (navigate && status === "Ijaraga qo'yuvchi") {

    return <Navigate to="/landlord" />

  } else if (navigate && status === "Ijaraga oluvchi") {
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
      <div className="signUpWrapper">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Ro'yhatdan o'tish</h2>
              <div className="input-group mb-3">
                <form onSubmit={submit}>
                  <input
                    type="text"
                    className="form-control signUpInputStyle"
                    placeholder="Ismingizni kiriting"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={e => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control signUpInputStyle mt-2"
                    placeholder="Familiyangizni kiriting"
                    aria-label="surname"
                    onChange={e => setUseName(e.target.value)}
                    aria-describedby="basic-addon1"
                  />

                  <div className="mt-2">

                    <select
                      className="btn btn-white  dropdown-toggle w-100 signUpBtn"
                      onChange={e => setStatus(e.target.value)}
                    >
                      <option
                        value=""
                        className="dropdown-item"
                      >
                        Siz kimsiz
                      </option>
                      <option
                        value="Ijaraga qo'yuvchi"
                        className="dropdown-item"
                      >
                        Ijaraga beruvchi
                      </option>
                      <option
                        value="Ijaraga oluvchi"
                        className="dropdown-item"
                      >
                        Ijaraga oluvchi
                      </option>
                    </select>
                  </div>
                  <input
                    type="number"
                    className="form-control signUpInputStyle mt-2"
                    placeholder="+998 9 "
                    aria-label="surname"
                    aria-describedby="basic-addon1"
                    onChange={e => setPhone_number(e.target.value)}
                  />
                  <input
                    type="email"
                    className="form-control signUpInputStyle mt-2"
                    placeholder="Email kiriting "
                    aria-label="surname"
                    aria-describedby="basic-addon1"
                    onChange={e => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control signUpInputStyle mt-2"
                    placeholder="Parol yarating"
                    aria-label="surname"
                    aria-describedby="basic-addon1"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary btn-lg mt-2">
                    Tasdiqlash
                  </button>
                </form>
              </div>
            </div>
            <div className="col">
              <img src={signUp} alt="" />
              <Link to="/">
                <p className="accountBor">Profilga o'tish</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
