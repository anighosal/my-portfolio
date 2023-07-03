import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="skills" element={<Skills></Skills>}></Route>
        <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
