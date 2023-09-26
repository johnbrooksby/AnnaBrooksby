import React from "react";

const Name = (props) => {
  return (
    <div>
      <h1
        // className="name"
        role="button"
        onClick={() => {
          props.setHide({
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
      <div className="titleTextSection">
        <p className="titleText">{props.title}</p>
      </div>
    </div>
  );
};

export default Name;
