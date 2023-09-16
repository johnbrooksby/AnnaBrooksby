import React from "react";
import { GrFacebook } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = (props) => {
  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          window. scrollTo(0, 0)
          props.setHide({
            name: true,
            about: true,
            skills: true,
            projects: true,
            contact: !props.hide.contact,
          });
        }}
      >
        contact
      </h2>

      <section className="contact_me text_section" hidden={props.hide.contact}>
        <div className="linksBox">
          <a
            className="links"
            href="http://facebook.com/annabrooksby"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrFacebook />
          </a>
          <br />
          <a
            className="links"
            href="http://instagram.com/anna_brxb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <br />
          <a
            className="links"
            style={{ textDecoration: "none" }}
            href="mailto:annabrooksby@gmail.com"
          >
            <MdEmail />
          </a>
        </div>
        {/* <div className="textLinks">
          <a
            className="link"
            style={{ textDecoration: "none" }}
            href="https://docs.google.com/document/d/1v9X50yG8z3e2RIXA9_7UPmu8TPOMSdJ9THt_tavmwhU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>My Resume</h3>
          </a>
        </div> */}
      </section>
    </div>
  );
};

export default Contact;
