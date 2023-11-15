import React, { useState } from "react";
import "./App.css";
import Name from "./components/Name";
import About from "./components/About";
import Skills from "./components/MyBooks";
import Projects from "./components/Favorites";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [hide, setHide] = useState({
    about: true,
    skills: true,
    projects: true,
    contact: true,
  });

  return (
    <div className="App">
      <img
        style={{
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          left: "0px",
          zIndex: -1,
        }}
        src="https://rare-gallery.com/thumbs/503217-background-corrosion.jpg"
      />
      <div className="imageDiv">
        <img src="/Anna.jpeg" className="image" alt="Anna.jpeg" />
      </div>
      <div className="body">
        <Name
          setHide={setHide}
          name="anna brooksby"
          // title="author: novelized self-help, cycle-breaking"
          title="author: lds fiction, cycle-breaking"
        />
        <About hide={hide} setHide={setHide} />
        <Skills hide={hide} setHide={setHide} />
        <Projects hide={hide} setHide={setHide} />
        <Contact hide={hide} setHide={setHide} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
