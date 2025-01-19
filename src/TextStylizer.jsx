import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar.jsx";

function TextStylizer({ isOpen, setIsOpen }) {
  const saveMode = JSON.parse(localStorage.getItem("saveMode"));
  const [mode, setMode] = useState(saveMode);
  const darkIcon = <FontAwesomeIcon icon={faMoon} />;
  const lightIcon = <FontAwesomeIcon icon={faSun} />;

  function modeHandle() {
    setMode(!mode);
  }

  useEffect(() => {
    localStorage.setItem("saveMode", JSON.stringify(mode));
  }, [mode]);

  return (
    <div className={mode === true ? "dark" : "light"}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav className="bg-backgroundColor text-textColor flex justify-between items-center sm:px-10 xs:px-7 w-full h-16">
        <ul className="flex items-center">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setIsOpen(true)}
            className="h-6 w-6 pr-5 cursor-pointer xs:block sm:hidden"
          />
          <li className="font-bold sm:text-xl xs:text-[18px] pr-10">
            <Link to="/">Text Stylizer</Link>
          </li>
          <li className="pr-10 font-semibold xs:hidden sm:block">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-10 font-semibold xs:hidden sm:block">
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        <button
          onClick={modeHandle}
          className="font-semibold rounded sm:text-base xs:text-[14px] sm:w-32 sm:h-10 xs:w-28 xs:h-8 bg-buttonBg hover:bg-hoverBtnBg text-buttonText"
        >
          {mode === false ? (
            <>Dark Mode {darkIcon}</>
          ) : (
            <>Light Mode {lightIcon}</>
          )}
        </button>
      </nav>
      <Outlet />
    </div>
  );
}

export default TextStylizer;
