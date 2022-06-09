import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css';

function Login(props) {
    var page = props.page;
    const user = "Admin";
    const pass = "Admin";

    const user2 = "Staff";
    const pass2 = "Staff";
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [b, setB] = useState('');
    const [check, setCheck] = useState(false);
    const [role, setRole] = useState('admin');
 
    const loginBtn = () => {
        
        
        if(username==user && password==pass && role=='admin'){
           setCheck(true);
           setB('Welcome Admin');
           navigate('/admin');

           
         
           
        }else if(username==user2 && password==pass2 && role=='staff'){
            setCheck(true);
            setB('Welcome Staff');
            navigate('/staff');
           
        }
        else
        {
            setCheck(false);
            setB('Incorrect username or password!');
        }
        
    }

  return (
    <div className='container'>
       
        <div className='login-container'>
        <h3>{page}</h3>
        <div className='login-form-container'>
           <div className='input'><p>Username:</p>
            <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)}/></div> <div className='input'><p>Password:</p>
            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/></div>
            <div className='input'><p>Role:</p></div>
            <select id="role" name="role"  onChange={(e) => setRole(e.target.value)}>
                                <option value="admin">Admin</option>
                                <option value="staff">Staff</option>
                              
            </select>
            <div className='btn' onClick={loginBtn}>Login</div>

            {  (check? <p>{b}</p> : <p style={{color:"red"}}>{b}</p> ) }      

        
            
        </div>
        </div>

        
        </div>
  )
}

export default Login