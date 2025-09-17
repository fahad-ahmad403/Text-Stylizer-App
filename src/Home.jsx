import { useState } from "react";

function Home({ setIsOpen }) {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([""]);
  const [redoStack, setRedoStack] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  function changeHandle(e) {
    setText(e.target.value);
    setRedoStack([]);
    setHistory((prevHistory) => [...prevHistory, e.target.value]);
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

  function capitalizeHandle() {
    setText(
      text
        .split(". ")
        .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
        .join(". ")
    );
  }

  function ClearSpacesHandle() {
    setText(text.replace(/\s+/g, " ").trim());
  }

  function copyHandle() {
    const givenText = document.getElementById("textBox");
    givenText.select();
    navigator.clipboard.writeText(givenText.value);
  }

  async function pasteHandle() {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setHistory((prevHistory) => [...prevHistory, text]);
      setText((prevText) => prevText + clipboardText);
    } catch (err) {
      alert("Failed to read clipboard contents: ", err);
    }
  }

  function undoHandle() {
    if (history.length > 1) {
      const lastState = history[history.length - 2];
      setRedoStack((prevRedoStack) => [text, ...prevRedoStack]);
      setText(lastState);
      setHistory(history.slice(0, -1));
    }
  }

  function redoHandle() {
    if (redoStack.length > 0) {
      const nextState = redoStack[0];
      setText(nextState);
      setRedoStack(redoStack.slice(1));
      setHistory((prevHistory) => [...prevHistory, nextState]);
    }
  }

  function findAndReplace() {
    const findWord = prompt("Enter the word to find:");
    if (findWord) {
      const replaceWord = prompt("Enter the word to replace with:");
      if (replaceWord !== null) {
        const newText = text.replace(new RegExp(findWord, "g"), replaceWord);
        setHistory((prevHistory) => [...prevHistory, text]);
        setText(newText);
      }
    }
  }

  function speakText() {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  }

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="flex flex-col items-center bg-containerBg min-h-screen"
    >
      <h1 className="font-semibold text-center mx-5 sm:text-4xl xs:text-xl py-10 text-textColor">
        🚀 Simplify, Edit, and Perfect Your Text in Seconds!
      </h1>
      <textarea
        onChange={changeHandle}
        id="textBox"
        value={text}
        placeholder="Enter Text Here"
        className="bg-inputColor placeholder:text-gray-500 text-textColor resize-none w-4/5 h-64 pl-5 pt-5 rounded outline-none"
      ></textarea>
      <div className="py-5 gap-2 px-8 flex flex-wrap justify-center w-full h-auto">
        <button
          onClick={capitalHandle}
          className={`font-semibold rounded w-32 h-10 text-buttonText ${
            text.length === 0
              ? "cursor-not-allowed bg-blue-500 hover:bg-blue-500"
              : "cursor-pointer bg-buttonBg hover:bg-hoverBtnBg"
          }`}
          disabled={text.length === 0}
        >
          To Upper Case
        </button>
        <button
          onClick={smallHandle}
          className={`font-semibold rounded w-32 h-10 text-buttonText ${
            text.length === 0
              ? "cursor-not-allowed bg-blue-500 hover:bg-blue-500"
              : "cursor-pointer bg-buttonBg hover:bg-hoverBtnBg"
          }`}
          disabled={text.length === 0}
        >
          To Lower Case
        </button>
        <button
          onClick={capitalizeHandle}
          className={`font-semibold rounded w-32 h-10 text-buttonText ${
            text.length === 0
              ? "cursor-not-allowed bg-blue-500 hover:bg-blue-500"
              : "cursor-pointer bg-buttonBg hover:bg-hoverBtnBg"
          }`}
          disabled={text.length === 0}
        >
          Capitalize
        </button>
        <button
          onClick={clearHandle}
          className={`font-semibold rounded w-32 h-10 text-buttonText ${
            text.length === 0
              ? "cursor-not-allowed bg-blue-500 hover:bg-blue-500"
              : "cursor-pointer bg-buttonBg hover:bg-hoverBtnBg"
          }`}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          onClick={ClearSpacesHandle}
          className={`font-semibold rounded w-32 h-10 text-buttonText ${
            text.length === 0
              ? "cursor-not-allowed bg-blue-500 hover:bg-blue-500"
              : "cursor-pointer bg-buttonBg hover:bg-hoverBtnBg"
          }`}
          disabled={text.length === 0}
        >
          Clear Space
        </button>
        <button
          onClick={findAndReplace}
          className={`font-semibold rounded w-32 h-10 text-buttonText ${
            text.length === 0
              ? "cursor-not-allowed bg-blue-500 hover:bg-blue-500"
              : "cursor-pointer bg-buttonBg hover:bg-hoverBtnBg"
          }`}
          disabled={text.length === 0}
        >
          Find/Replace
        </button>
        <button
          onClick={undoHandle}
          className={`font-semibold rounded w-32 h-10 text-buttonText ${
            history.length <= 1
              ? "cursor-not-allowed bg-blue-500 hover:bg-blue-500"
              : "cursor-pointer bg-buttonBg hover:bg-hoverBtnBg"
          }`}
          disabled={history.length <= 1}
        >
          Undo Text
        </button>
        <button
          onClick={redoHandle}
          className={`font-semibold rounded w-32 h-10 text-buttonText ${
            redoStack.length === 0
              ? "cursor-not-allowed bg-blue-500 hover:bg-blue-500"
              : "cursor-pointer bg-buttonBg hover:bg-hoverBtnBg"
          }`}
          disabled={redoStack.length === 0}
        >
          Redo Text
        </button>
        <button
          onClick={copyHandle}
          className={`font-semibold rounded w-32 h-10 text-buttonText ${
            text.length === 0
              ? "cursor-not-allowed bg-blue-500 hover:bg-blue-500"
              : "cursor-pointer bg-buttonBg hover:bg-hoverBtnBg"
          }`}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          onClick={pasteHandle}
          className={`font-semibold rounded w-32 h-10 bg-buttonBg hover:bg-hoverBtnBg text-buttonText`}
        >
          Paste Text
        </button>
        <button
          onClick={speakText}
          className={`font-semibold rounded w-32 h-10 text-buttonText ${
            text.length === 0
              ? "cursor-not-allowed bg-blue-500 hover:bg-blue-500"
              : "cursor-pointer bg-buttonBg hover:bg-hoverBtnBg"
          }`}
          disabled={text.length === 0}
        >
          {isSpeaking ? "Stop Listening" : "Listen Now"}
        </button>
      </div>
      <div className="flex flex-col bg-inputColor pt-5 sm:pl-[10%] sm:items-start w-full pl-0 items-center pb-5">
        <h3 className="flex justify-center text-textColor font-bold text-2xl py-5">
          Text Summary
        </h3>
        <div className="flex justify-center text-textColor">
          <div className="flex flex-col gap-y-3 pr-16">
            <p className="font-semibold">
              Words: {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
            </p>
            <p className="font-semibold">Characters: {text.length}</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="font-semibold">
              Lines: {text.trim() === "" ? 0 : text.split("\n").length}
            </p>
            <p className="flex flex-wrap flex-col lg:flex-row gap-x-1 font-semibold">
              <span>Reading Time:</span>{" "}
              <span>
                {(0.01 * (text || "").split("").length).toFixed(2)} minutes
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
