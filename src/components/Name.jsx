import React from "react";

const Name = (props) => {
  return (
    <div>
      <h1
        // className="name"
        role="button"
        onClick={() => {
          props.setHide({
            name: false,
            about: true,
            skills: true,
            projects: true,
            contact: true,
          });
        }}
      >
        {props.name}
      </h1>
      {/* <section hidden={props.hide.name}> */}
      <section>
        <p className="titleText">{props.title}</p>
      </section>
    </div>
  );
};

export default Name;
