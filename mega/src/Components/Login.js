import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = ({setLoginUser}) => {
  const navigate = useNavigate();
  const  [user, setUser]=useState({
    Email:'',
    Password:''
  });

  const changeHandler = (e)=>{
    
    
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]:value
    })

  }
  const login = () =>{  
   
    axios.post('http://localhost:4000/api/v1/login', user)
    .then(res => {
      alert(res.data.message) 
      setLoginUser(res.data.user)
      navigate('/dashboard')
    }).catch((err)=>{
      console.log('login err:' + err);
      alert('please write valid details')
    })
  
    setUser({
      ...user,
      Email:'',
      Password:''
    })

  }
  
  const goToSignUpPage =()=>{
    navigate('/signup')
  }
  return (
    <>
      <div className='main_div'>
       <div className='heading_div'>
        <h6>Please login</h6>
        </div>
        <div className='input_div'>
        <input name="Email" value= {user.Email} type='email' placeholder="Enter your Email" onChange={changeHandler}/>
        <input name="Password" value= {user.Password} type='password' placeholder="Enter your Password" onChange={changeHandler}/>
        </div>
        <div className='button_div'>
        <button onClick={login}>Login</button>
        <p className='paragraph'> or </p>
        <button onClick={goToSignUpPage}>signup?</button>
        </div>
      </div>
    </>
  );
};

export default Login;
