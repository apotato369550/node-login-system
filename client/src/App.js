import React, {useState} from 'react';
import './App.css';

function App() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" onChange={() => {
          setUsernameReg(e.target.value);
        }}/>
        <label>Password</label>
        <input type="text" onChange={() => {
          setPasswordReg(e.target.value);
        }}/>
        <button> Register </button>
      </div>
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
      </div>
    </div>
  );
}
// make form here
// continue watching tutorial
export default App;
