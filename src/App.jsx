import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./components/Intro/Intro";
import { Navbar } from "./components/NavBar/Navbar";
import { Skill } from "./components/Skills/Skill";
import { Work } from "./components/Works/Work";
import { Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Intro />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
