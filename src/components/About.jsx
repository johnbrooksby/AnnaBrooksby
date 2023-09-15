import React from "react";

const About = (props) => {

  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          props.setHide({name: true, about: false, skills: true, projects: true, contact: true})
        }}
      >
        About
      </h2>
      <section hidden={props.hide.about}>
        <p></p>
        <p>
          
        </p>
        <h3></h3>
      </section>
    </div>
  );
};

export default About;
