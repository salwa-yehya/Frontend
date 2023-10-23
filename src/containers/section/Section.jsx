import React from "react";
import "./section.css";
import sec from "../../assets/section.jpeg";
import { AiOutlineCheck } from "react-icons/ai";
const List = ({text}) => (
  <>
  <ul>
      <li>
        <span>
          <AiOutlineCheck color="#004e98" size={27} />
        </span>
      {text}
      </li>
  </ul>
  </>
)
const Section = () => {
  return (
    <div className="section">
      <div className="section_content">
        <h2>Everyday life made easier</h2>
        <p>
          When life gets busy, you dont have to tackle it alone. Get time back
          for what you love without breaking the bank.
        </p>
        <List text='Choose your Tasker by reviews, skills, and price'/>
        <List text='Schedule when it works for you — as early as today'/>
        <List text='Chat, pay, tip, and review all through one platform'/>
      </div>
      <div className="section_image">
        <img src={sec} alt="image"/>
      </div>
    </div>
  );
};

export default Section;
