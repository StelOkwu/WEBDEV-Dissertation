import React, { useState } from 'react';
import '../components/Login.js';
import Axios from 'axios';
import '../components/login.css';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Footer from '../components/Footer';

function Login() {

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const [loginStatus, setLoginStatus] = useState("");

   const login = () => {
     Axios.post("http://localhost:3001/login", {
       username: username,
       password: password,
     }).then((response) => {
       if (response.data.message) {
         setLoginStatus(response.data.message)
       } else {
          setLoginStatus(response.data[0].username);
       }
       console.log(response);
     });
  };

  return (
    <div className="App" size="sm">
        <h1 style={{ color:"black", marginTop:"20px"}}>Login Application</h1>
    <Container>
         <div className="login">
          <h1>Login</h1>
          <label>Username</label>
          <input type="text" placeholder="Username..." onChange={(e) => {setUsername(e.target.value)}} required/> 
           <label>Password</label>
          <input type="password" placeholder="Password..." onChange={(e) => {setPassword(e.target.value)}} required/> 
          <Button className='button1' onClick={login}>Login</Button>
          <h3> Please register First As User Admin here:  <Link to="/register">Register</Link> </h3>
        </div>
        <h2>{loginStatus}</h2>
      </Container>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
