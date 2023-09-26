import React from "react";

const About = (props) => {
  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          window. scrollTo(0, 0)
          props.setHide({
            about: !props.hide.about,
            skills: true,
            projects: true,
            contact: true,
          });
        }}
      >
        about
      </h2>
      <section hidden={props.hide.about} className="text_section">
        <p>
        Hi, I’m Anna! I’m a mom of seven, reader, writer, learner, and cycle-breaker.
        </p>
        <br></br>
        <p>
        Every family has problems. Mine was no exception. Because of my family’s unique challenges, I grew up with some major gaps in my understanding of how to build a healthy family of my own. Without seeing strong relationships up close, once I reached adulthood, I found myself floundering, unsure about how to move forward. I desperately wanted to raise my own children in a healthy, happy home, but didn’t know how to create one.
        </p>
        <br></br>
        <p>
        God was gracious and gave me opportunities to learn the things I needed to - many of them the hard way. My books share those hard-earned lessons in story form, to help readers “see” the principles in action and learn how to apply them in their own lives. Come be a cycle-breaker with me! I promise it’s possible…and so worth it.
        </p>       
      </section>
    </div>
  );
};

export default About;
