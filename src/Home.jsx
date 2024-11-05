import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");

  function changeHandle(e) {
    setText(e.target.value);
  }

  function capitalHandle() {
    setText(text.toUpperCase());
  }

  function smallHandle() {
    setText(text.toLowerCase());
  }

  function clearHandle() {
    setText("");
  }

  function copyHandle() {
    const givenText = document.getElementById("textBox");
    givenText.select();
    navigator.clipboard.writeText(givenText.value);
  }

  return (
    <div className="flex flex-col items-center bg-containerBg min-h-screen">
      <h1 className="font-semibold text-4xl py-10 text-textColor">
        Enter text and Magic on it
      </h1>
      <textarea
        onChange={changeHandle}
        id="textBox"
        value={text}
        placeholder="Enter Text Here"
        className="bg-inputColor placeholder:text-black resize-none w-4/5 h-64 pl-5 pt-5 rounded outline-none"
      ></textarea>
      <div className="pt-5">
        <button
          onClick={capitalHandle}
          className="font-semibold rounded w-32 h-10 bg-buttonBg text-buttonText mr-3"
        >
          To Upper Case
        </button>
        <button
          onClick={smallHandle}
          className="font-semibold rounded w-32 h-10 bg-buttonBg text-buttonText mr-3"
        >
          to lower case
        </button>
        <button
          onClick={clearHandle}
          className="font-semibold rounded w-32 h-10 bg-buttonBg text-buttonText mr-3"
        >
          Clear Text
        </button>
        <button
          onClick={copyHandle}
          className="font-semibold rounded w-32 h-10 bg-buttonBg text-buttonText mr-3"
        >
          Copy Text
        </button>
      </div>
      <div className="flex pt-5">
        <p className="flex justify-center items-center rounded font-bold w-32 h-10 mr-3 bg-secBtnBg">
          Words: {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
        </p>
        <p className="flex justify-center text-center items-center rounded font-bold w-48 h-10 mr-3 bg-secBtnBg">
          Characters: {text.length}
        </p>
        <p className="flex justify-center text-center items-center rounded font-bold w-80 h-10 bg-secBtnBg">
          It takes about {0.01 * (text || "").split("").length} minutes to read.
        </p>
      </div>
    </div>
  );
}

export default Home;
