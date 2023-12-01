import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./App.css";
import Name from "./components/Name";
import About from "./components/About";
import Skills from "./components/MyBooks";
import Projects from "./components/Favorites";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog/Blog"


function App() {
  const [hide, setHide] = useState({
    about: true,
    skills: true,
    projects: true,
    contact: true,
  });
  const navigate = useNavigate()

  let blog = false

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
        navigate("/")
        console.log(blog)
      }}
      />
      <About hide={hide} setHide={setHide} />
      <Skills hide={hide} setHide={setHide} />
      <Projects hide={hide} setHide={setHide} />
      <Routes>
          <Route
          path="blog"
          element={<Blog />}
          target="_blank"
          rel="noopener noreferrer"
          >
          </Route>
          </Routes>
          {/* <NavLink to="blog">blog</NavLink> */}
          <h2 role="button" 
        // element={<Blog />}
            // href="http://localhost:5173/blog"
            // target="_blank"
            // rel="noopener noreferrer"
            onClick={() => {
              blog = true
              localStorage.setItem('blog', blog)
              window.open("http://localhost:5173/blog", "_blank")
          console.log(blog)
          }}>blog</h2>
        <Contact hide={hide} setHide={setHide} />
        </div>
        <Footer />
        </div>
        );
      }
      
      export default App;
    
      