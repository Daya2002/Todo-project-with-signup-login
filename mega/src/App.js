
import Login from "./Components/Login";
import DashBoard from "./Components/DashBoard";
import SignUp from "./Components/SignUp";
import Todos from "./Components/Todos";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";





function App() {
  const [user ,setLoginUser] = useState({});
  // console.log(user)
  return (
    <>
    <Routes>
      <Route path='/' element= {<SignUp />}/>
      <Route path='/Login' element= {<Login setLoginUser={setLoginUser} />}/>
      <Route path='/Dashboard' element= {user && user._id ? <DashBoard user={user.FirstName} /> : <Login setLoginUser={setLoginUser} /> }/>
      <Route path='/Todos' element= {<Todos  />}/>
      <Route path='*' element= {<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
