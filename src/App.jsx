import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextStylizer from "./TextStylizer.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BrowserRouter basename="/Text-Stylizer-App/">
        <Routes>
          <Route
            path="/"
            element={<TextStylizer isOpen={isOpen} setIsOpen={setIsOpen} />}
          >
            <Route
              index
              element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
            <Route
              path="about"
              element={<About isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
