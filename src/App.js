import './App.css';
import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
  useHistory,
  Redirect,
  Navigate
} from "react-router-dom";
import Auth from './pages/Auth/Auth';
import LoginComponent from './components/LoginComponent/LoginComponent';
import SignupComponent from './components/SignupComponent/SignupComponent';
import Signup from "./pages/Auth/Signup/Signup";
import Product from "./pages/Product/Product";
function App() {
  // please don't remove this comment
  // useHistory.push("/home");

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/Home" />}/>
        <Route path='Home' element={<Home/>} />
        <Route path='Auth' element={<Auth/>}>
          <Route index element={<LoginComponent/>}></Route>
          <Route exact path="/Auth" element={<Navigate to="/Auth/Login" />}/>
        </Route>
        <Route path='Login' element={<LoginComponent/>}></Route>
        <Route path='Signup' element={<Signup/>}></Route>
        <Route path="product" element={<Product></Product>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
