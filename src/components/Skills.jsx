import React from "react";

const Skills = (props) => {
  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          window. scrollTo(0, 0)
          props.setHide({
            name: true,
            about: true,
            skills: !props.hide.skills,
            projects: true,
            contact: true,
          });
        }}
      >
        my books
      </h2>
      <section hidden={props.hide.skills} className="text_section">
        <p>Learning to Love</p>
        <p>
          What Annie wants most is a home of her own…but she doesn’t know how to
          get there. Unlocking the secrets of the dating game and learning to
          trust herself are all part of the process of Learning to Love.
        </p>
        <br></br>
        <p>Learning to Love Again</p>
        <p>
          Annie finds herself raising her children alone after losing the love
          of her life in a tragic accident. Will she be able to see past her
          broken heart and learn to love…again?
        </p>
      </section>
    </div>
  );
};

export default Skills;
