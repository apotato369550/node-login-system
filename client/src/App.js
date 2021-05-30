import React, {useState} from 'react';
import './App.css';
// axios not accecible?
import Axios from "axios";

// import usestate
// test this again to see why it aint working??

// put this in react function???

function App() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  
  // test this mf out
  const register = () => {

    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
    })
  }
// is there an event parameter?
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
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
      </div>
    </div>
  );
}
// e is not defined
// web vitals??
export default App;
