import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./components/home";
import Name from "./components/Name";
import About from "./components/About";
import Skills from "./components/MyBooks";
import Projects from "./components/Favorites";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog/Blog";

function App() {
  const [hide, setHide] = useState({
    about: true,
    skills: true,
    projects: true,
    contact: true,
  });
  const navigate = useNavigate();

  let blog = false;

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
          onClick={() => {
            navigate("/");
            console.log(blog);
          }}
        />
        <Routes>
          <Route
            path="/"
            element={<Home hide={hide} setHide={setHide} blog={blog} />}
          ></Route>
          <Route
            path="blog"
            element={<Blog blog={blog}/>}
            target="_blank"
            rel="noopener noreferrer"
            >
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
