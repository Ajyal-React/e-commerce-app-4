import './App.css';
import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
  useHistory,
  Redirect,
  Navigate,
  useNavigate
} from "react-router-dom";
import Auth from './pages/Auth/Auth';
import LoginComponent from './components/LoginComponent/LoginComponent';
import SignupComponent from './components/SignupComponent/SignupComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserStateSelector } from './redux/user/user.selectors';
function App() {

  const userData = UserStateSelector();

  // useEffect(() => {
  //   if(!userData){
  //       navigate('/Auth/Login');
  //   }
  // }, [userData]);


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to={!!userData?"/Home":"Auth"} />}/>
          <Route path='Home' element={<Home/>} />
          <Route path='Auth' element={<Auth/>}>
            <Route index element={<LoginComponent/>}></Route>
            <Route exact path="/Auth" element={<Navigate to="/Auth/Login" />}/>
            <Route path='Login' element={<LoginComponent/>}></Route>
            <Route path='Signup' element={<SignupComponent/>}></Route>
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
