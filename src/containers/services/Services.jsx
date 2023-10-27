import React from "react";
import "./services.css";
import Project from "../../component/project/Project";


const Services = () => {
  return (
    <div id="services" className="services section__padding">
      <div className="services_heading">
        <h1>Popular projects in your area</h1>
      </div>
      <div className="services_cards">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <div className="services_cards">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Services;
