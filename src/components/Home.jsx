import React from "react";
import About from "./About";
import Skills from "./MyBooks";
import Contact from "./Contact";
import Projects from "./Favorites";
import { Routes, Route, NavLink } from "react-router-dom";

const Home = (props) => {
  const { hide, setHide, blog } = props;
  return (
    <div>
      <About hide={hide} setHide={setHide} />
      <Skills hide={hide} setHide={setHide} />
      <Projects hide={hide} setHide={setHide} />
      <h2

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
        blog (coming soon!)
      </h2>
      <Contact hide={hide} setHide={setHide} />
    </div>
  );
};

export default Home;
