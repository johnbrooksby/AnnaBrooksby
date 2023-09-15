import React from "react";

const Skills = (props) => {

  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          props.setHide({
            name: true,
            about: true,
            skills: false,
            projects: true,
            contact: true,
          });
        }}
      >
        Section 2
      </h2>
      <section hidden={props.hide.skills}>
        <p></p>
        <p></p>
      </section>
    </div>
  );
};

export default Skills;
