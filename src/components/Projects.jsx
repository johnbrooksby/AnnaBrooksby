import React from "react";

const Projects = (props) => {
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
            projects: !props.hide.projects,
            contact: true,
          });
        }}
      >
        my favorites
      </h2>
      <section hidden={props.hide.projects} className="text_section">
        <p className="favorites">Louisa May Alcott - Little Women series</p>
        <p className="favorites">L. M. Montgomery - Anne of Green Gables series</p>
        <p className="favorites">Emily of New Moon series, The Blue Castle</p>
        <p className="favorites">Charlotte Bronte - Jane Eyre</p>
        <p className="favorites">Victor Hugo - Les Miserables</p>
        <p className="favorites">Robin McKinley - The Blue Sword, The Hero and the Crown, Chalice,
          Spindle’s End</p>
        <p className="favorites">Sarah M. Eden - Lancaster/Jonquil series, Hope Springs series</p>
        <p className="favorites">Carla Kelly - Libby’s London Merchant, Her Smile, Safe Passage,
          Borrowed Light series</p>
        <p className="favorites">Mimi Matthews - Fair as a Star, Parish Orphans of Devon series</p>
        <p className="favorites">Traci Hunter Abramson - Saints Squad series</p>
        <p className="favorites">Julie Wright - Lies Jane Austen Told Me; Lies, Love, and Breakfast at
          Tiffany’s</p>
        <p className="favorites">Roseanna M. White - A Lady Unrivaled (The Ladies of the Manor series)</p>
        <p className="favorites">Melanie Jacobson - The List, Always Will</p>
      </section>
    </div>
  );
};

export default Projects;
