import React from "react";
// import { GrFacebook } from "react-icons/gr";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
import { ImMail4 } from "react-icons/im";


const Contact = (props) => {
  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          window.scrollTo(0, 0);
          props.setHide({
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
            <FaFacebook />
          </a>
          <br />
          <a
            className="links"
            href="http://instagram.com/anna_brxb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              {/* <FaInstagramSquare className="insta" /> */}
          {/* <img src="../public/insta.png" className="insta" /> */}
          <img src="https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da7ef6dd1302486c9a67baebe4b364bc.png" className="insta" />
            </div>
          </a>
          <br />
          <a
            className="links"
            style={{ textDecoration: "none" }}
            href="mailto:annabrooksby@gmail.com"
            >
            <ImMail4 />
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
