import React from "react";

const Skills = (props) => {
  return (
    <div className="menu">
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
            <div className="center">
        <p>(in the works)</p>
      </div>
      <br />
      <section hidden={props.hide.skills} className="text_section">
        <div className="booksSection">
          <div className="coversDiv">
            <img
              className="covers"
              src="/Betterthanperfect.png"
              alt="Better than Perfect cover"
            />
          </div>
          <div className="booksText">
            <p>Better than Perfect</p>
            <br />
            <p>
              Annie has always been perfect. It’s been her life’s goal to make
              everyone happy. But when it’s her own happiness on the line, can
              she let go of perfection in order to claim something real? Is
              there something out there that’s better than perfect?
            </p>
          </div>
        </div>
        <br />
        <div className="booksSection">
          <div className="coversDiv">
            <img
              className="covers"
              src="/Solidground.png"
              alt="Solid Ground cover"
            />
          </div>
          <div className="booksText">
            <p>Solid Ground</p>
            <br />
            <p>
              Cam’s confession has shattered Kelsie’s picture-perfect life and
              she is trying to pick up the pieces. Can a broken heart and a
              broken marriage be put back together? Can Kelsie and Cam push
              through their fears and find their solid ground again?
            </p>
          </div>
        </div>
        <br />
        <div className="booksSection">
          <div className="coversDiv">
            <img
              className="covers"
              src="/Morethanenough.png"
              alt="More than Enough cover"
            />
          </div>
          <div className="booksText">
            <p>More than Enough</p>
            <br />
            <p>
              Annie finds herself raising her children alone after losing the
              love of her life in a tragic accident. Can she be enough for them?
              What will it take for Annie to believe in herself - and in love -
              again?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
