import React, { useState } from "react";

const Blog = (props) => {
  // const [blog, setBlog] = useState(Boolean(localStorage.getItem("blog")))

  return (
    <div className="menu">
      <h2
        role="button"
        onClick={() => {
          props.blog = true;
          localStorage.setItem("blog", blog);
          window.open("http://localhost:5173/blog", "_blank");
        }}
      >
        blog
      </h2>
      <p className="center">(coming soon!)</p>
    </div>
  );
};

export default Blog;
