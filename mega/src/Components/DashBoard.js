import React from "react";
import { useNavigate } from "react-router-dom";
import "./DashBoard.css";

const DashBoard = ({ user }) => {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/signup");
  };
  console.log(user);
  const goToTodos = ({ user }) => {
    navigate("/Todos");
  };
  return (
    <>
      {/* <div className="_div">
        <button onClick={goToTodos}>my Todos</button>
        <div className="user_div">
          <button>{user}</button>
          <button onClick={goToLoginPage}>logOut</button>
        </div>
      </div>

      <p>This is DashBoard</p> */}

      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Home", "/dashboard"],
          ["Team", "/team"],
          ["Projects", "/projects"],
          ["Reports", "/reports"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </nav>
    </>
  );
};

export default DashBoard;
