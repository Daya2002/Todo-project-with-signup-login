import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const signup = () => {
    const { Password, ConfirmPassword } = user;
    if (Password.length <3){
      alert('pass too short')
    }else if(Password.search(/[A-Z]/)==-1){
      alert('atleast one captal letter requied')

    }
    else if(Password === ConfirmPassword) {
      axios
        .post("http://localhost:4000/api/v1/signup", user)
        .then((res) => {
          // console.log(res.data);
          alert(res.data.message);
        })
        .catch((err) => {
          console.log("err while signup:" + err);
          alert("user all ready exist");
        });
        

      setUser({
        ...user,
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
      });
    } else {
      alert("password not match");
    }
  };

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="main_div">
        <div className="my_div">
          <h4>Create a Google Account</h4>
          <h6>Enter your details</h6>
        </div>
        <div className="input_div">
          <input
            name="FirstName"
            value={user.FirstName}
            type="text"
            placeholder="Enter your first name"
            onChange={changeHandler}
          />
          <input
            name="LastName"
            value={user.LastName}
            type="text"
            placeholder="Enter your Last name"
            onChange={changeHandler}
          />
          <input
            name="Email"
            value={user.Email}
            type="email"
            placeholder="Enter your Email"
            onChange={changeHandler}
          />
          <input
            name="Password"
            value={user.Password}
            type="password"
            placeholder="Enter your Password"
            onChange={changeHandler}
          />
          <input
            name="ConfirmPassword"
            value={user.ConfirmPassword}
            type="password"
            placeholder="Confirm Password"
            onChange={changeHandler}
          />
        </div>
        <div className="button_div">
        <button onClick={signup}>SignUp</button>
        <p className ='paragraph'>or</p>
        <button onClick={goToLoginPage}>login?</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;



