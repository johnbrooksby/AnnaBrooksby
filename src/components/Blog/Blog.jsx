import React, { useState } from "react";

const Blog = (props) => {
  // const [blog, setBlog] = useState(Boolean(localStorage.getItem("blog")))

  return (
    <div>
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
    </div>
  );
};

export default Blog;
