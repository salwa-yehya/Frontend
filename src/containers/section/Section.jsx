import React from "react";
import "./section.css";
const List = ({ text }) => (
  <>
    <ul>
      <li className="icon-checkmark">{text}</li>
    </ul>
  </>
);
const Section = ({imgsrc , imagePosition }) => {
  const imageClass = imagePosition === "left" ? "section-img-left" : "section-img-right";

  return (
    <div className="section">
      <div className="section_content">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore soluta consectetur sed dolores recusandae quo beatae quaerat .
        </p>
        <List text="Choose your Tasker by lorem ,ipsum and dolor sit" />
        <List text="quo beatae quaerat qui eveniet  — as early as today" />
        <List text="amet consectetur adipisicing elit all through one platform" />
      </div>
      <img className={imageClass} src={imgsrc} alt="image" />
    </div>
  );
};

export default Section;
