import React, {useState} from 'react';
import './App.css';
// axios not accecible?
import Axios from "axios";

// import usestate
// test this again to see why it aint working??

// implement video ting

function App() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');
  
  // watch the video
  // test this out later
  const register = () => {

    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
    })
  }

  // double check this below
  // yep this owrks/
  // forgot to change /register to /login
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password
    }).then((response) => {
      if(response.data.message){
        setLoginStatus("message: " + response.data.message);
      } else {
        // username of undefined
        setLoginStatus(response.data[0].username);
      }
    });
  }
  // continue owrkin on this
  // figure out wtf is wrong w/ this application
  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" onChange={(e) => {
          setUsernameReg(e.target.value);
        }}/>
        <label>Password</label>
        <input type="text" onChange={(e) => {
          setPasswordReg(e.target.value);
        }}/>
        <button onClick={register}> Register </button>
      </div>
      <div>
        <h1>Login</h1>
        <input 
        type="text" 
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        />
        <input 
        type="text" 
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}/>
        <button onClick={login}> Register </button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}
// test this above ^^^
export default App;
