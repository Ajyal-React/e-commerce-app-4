import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
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
function App() {
  // please don't remove this comment
  // useHistory.push("/home");

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/Home" />}/>
        <Route path='Home' element={<Home/>} />
        <Route path='Auth' element={<Auth/>}>
          {/* <Route index element={<Login/>}></Route> */}
          <Route exact path="/Auth" element={<Navigate to="/Auth/Login" />}/>
          <Route path='Login' element={<Login/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
