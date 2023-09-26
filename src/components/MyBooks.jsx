import React from "react";

const Skills = (props) => {
  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          window.scrollTo(0, 0);
          props.setHide({
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
        <div className="booksSection">
          <div className="coversDiv">
            <img
              className="covers"
              src="/LearningToLoveCover.svg"
              alt="Learning To Love Cover"
            />
          </div>
          <div className="booksText">
            <p>Learning to Love</p>
            <br />
            <p>
              What Annie wants most is a home of her own…but she doesn’t know
              how to get there. Unlocking the secrets of the dating game and
              learning to trust herself are all part of the process of Learning
              to Love.
            </p>
          </div>
        </div>
        <br></br>
        <div className="booksSection">
          <div className="coversDiv">
            <img
              className="covers"
              src="/LearningToLoveAgainCover.svg"
              alt="Learning To Love Cover"
            />
          </div>
          <div className="booksText">
            <p>Learning to Love Again</p>
            <br />
            <p>
              Annie finds herself raising her children alone after losing the
              love of her life in a tragic accident. Will she be able to see
              past her broken heart and learn to love…again?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
