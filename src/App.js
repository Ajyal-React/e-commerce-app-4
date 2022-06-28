import './App.css';
import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
import Signup from './pages/Auth/Signup/Signup';
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
import { UserStateSelector } from './redux/user/user.selectors';

function App() {
  const userData = UserStateSelector();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to={!!userData?"/Home":"/Auth"} />}/>
        <Route path='Home' element={<Home/>} />
        <Route path='Auth' element={<Auth/>}>
          <Route exact path="/Auth" element={<Navigate to="/Auth/Login" />}/>
          <Route path='Login' element={<LoginComponent/>}></Route>
          <Route path='Signup' element={<Signup/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
