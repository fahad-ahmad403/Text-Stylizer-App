import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function TextStylizer() {
  const [mode, setMode] = useState(false);

  function modeHandle() {
    setMode(!mode);
  }

  return (
    <div className={mode === true ? "dark" : "light"}>
      <nav className="bg-backgroundColor text-textColor flex justify-between items-center px-10 w-full h-16">
        <ul className="flex items-center">
          <li className="font-bold text-xl pr-10">
            <Link to="/">Text Stylizer</Link>
          </li>
          <li className="pr-10 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-10 font-semibold">
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        <button
          onClick={modeHandle}
          className="font-semibold rounded w-32 h-10 bg-buttonBg text-buttonText"
        >
          {mode === false ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>
      <Outlet />
    </div>
  );
}

export default TextStylizer;
