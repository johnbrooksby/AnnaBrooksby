import React from "react";

const About = (props) => {
  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          props.setHide({
            name: true,
            about: false,
            skills: true,
            projects: true,
            contact: true,
          });
        }}
      >
        about
      </h2>
      <section hidden={props.hide.about}>
        <p>
          Hi, I’m Anna! Mom of seven, reader, writer, learner, and cycle-breaker.
           I am the only daughter of wonderful, loving parents…who
          didn’t get along with each other. As a youth I longed for healthy
          relationships of my own, but doubted my ability to create them. I knew
          I would have to work hard to learn those things that came easily to
          other people. I did work hard, and I learned many valuable principles,
          but still struggled to know how to apply those principles in my own
          life. Without healthy examples, I found myself floundering, making
          rookie mistakes simply because I hadn’t ever seen the principles I was
          learning in action. I hoped for something better for myself and my
          future family, but I didn’t know how to get there. It has taken me
          years of trial and error, study and faith to learn how to take the
          principles I have been taught and apply them in my life. And I’m not
          finished. Cycle-breaking is a process that happens over time, and I am
          still working at building healthy relationships and healing my own
          trauma. I am grateful for all the learning and growth that have come
          into my life through my challenging experiences, and even more so if I
          can use those experiences to help smooth the path for others. Story
          can bridge the gap between learning a principle and knowing how to
          apply it. My books demonstrate the process of learning how to create
          and maintain healthy family relationships. They also include
          discussion guides that can be used in a group or individual setting to
          dive deeper into these principles and learn how to apply them in our
          lives. Genre: novelized self-help Books in the works: Learning to
          Love, Learning to Love Again
        </p>
        <p></p>
        <h3></h3>
      </section>
    </div>
  );
};

export default About;
