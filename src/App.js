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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Navigate to="/Home" />}/>
            <Route path='Home' element={<Home/>} />
            <Route path='Auth' element={<Auth/>}>
              <Route exact path="/Auth" element={<Navigate to="/Auth/Login" />}/>
              <Route path='Login' element={<LoginComponent/>}></Route>
              <Route path='Signup' element={<Signup/>}></Route>
            </Route>
          </Routes>
        </Router>

        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            bodyStyle={{fontSize: '10px'}}
        />
      </>
  );
}

export default App;
