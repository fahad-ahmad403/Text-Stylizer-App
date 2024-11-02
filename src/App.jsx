import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextStylizer from "./TextStylizer.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TextStylizer />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
