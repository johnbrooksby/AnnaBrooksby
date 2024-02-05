import React from "react";
import About from "./About";
import Skills from "./MyBooks";
import Contact from "./Contact";
import Projects from "./Favorites";
import Blog from "./Blog/Blog";
import { Routes, Route, NavLink } from "react-router-dom";

const Home = (props) => {
  const { hide, setHide, blog } = props;
  return (
    <div className="menuUpper">
      <About hide={hide} setHide={setHide} />
      <Skills hide={hide} setHide={setHide} />
      <Projects hide={hide} setHide={setHide} />
      <Blog />
      {/* <h2

        //Temporarily commented out.  Comment back in when going live
        // NavLink to="blog"

        role="button"
        onClick={() => {
        //   props.blog = true;
          localStorage.setItem("blog", "true");

          //Temporarily commented out.  Comment back in when going live
        //   window.open("http://localhost:5173/blog", "_blank");
        }}
      >
        blog
      </h2>
        <p className="center">(coming soon!)</p> */}
      <Contact hide={hide} setHide={setHide} />
    </div>
  );
};

export default Home;
