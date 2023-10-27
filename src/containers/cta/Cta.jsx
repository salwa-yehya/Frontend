import React from "react";
import "./cta.css";
import sign from "../../assets/sign-in.png";
import tasker from "../../assets/become-a-tasker-img.png";
import { Button } from "../../component";

const CalltoAction = ({ imagesrc, buttontext, description }) => {
  return (
    <>
      <div className="call-to-action">
        <img className="cta-image" src={imagesrc} alt={buttontext} />
        <h3>{description}</h3>
        <Button txt={buttontext} />
      </div>
    </>
  );
};

const Cta = () => {
  return (
    <div className="cta section__padding">
      <h1 className="cta_header">Ready to get Started ?</h1>
      <div className="cta_container">
        <div className="cta_container_left">
          <CalltoAction
          imagesrc={sign}
          description='Lorem Ipsum is simply dummy text of the printing '
           buttontext="sign in now" 
           />
        </div>
        <div className="cta_container_right">
          <CalltoAction 
          imagesrc={tasker}
          description='a long established fact that a reader will be distracted '
          buttontext="become a tasker" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
