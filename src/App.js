import Contact from "./Components/Contact/Contact";
import About from "./Components/AboutUs/About";
import Home from "./Components/Home/Home";
import Landlord from "./Components/Landlord/Landlord";
import SignUp from "./Components/Registration/SignUp/SignUp";
import SignIn from "./Components/Registration/SignIn/SignIn";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import PrivateRoute from "./Components/PrivateRoues/PrivateRoutes";
// import PublicRoute from './Components/PublicRoutes/PublicRoutes';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="aloqa" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="home" element={<Home />} />
            <Route path="landlord" element={<Landlord />} />
        </Routes>
        {/* <PublicRoute restricted={false} component={Home} path="/Home" />
        <PublicRoute restricted={false} component={About} path="/About" />
        <PublicRoute restricted={false} component={Contact} path="/Contact" />
        <PublicRoute restricted={false} component={Landlord} path="/Landlord" /> */}
        {/* <Routes>
          <Route exact element={<PrivateRoute  />}>
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Landlord" element={<Landlord />} />
          </Route>
          <Route element={<SignIn/>} path="/" exact />
          <Route element={<SignUp/>} path="/SignUp" exact />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
