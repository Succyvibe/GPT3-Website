import React from "react";
import PossibiltyImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibilty = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={PossibiltyImage} alt="possibilityImage" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to get started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
          quidem! Sit exercitationem recusandae explicabo esse laborum dicta!
          Perferendis debitis ipsa et nihil, nemo inventore molestias soluta,
          harum ratione quaerat voluptatem at tempore obcaecati voluptas
          quibusdam consequatur a quod porro fuga non aperiam delectus nostrum!
          Cumque minima libero aliquam laboriosam nostrum. assistance industry
        </p>
        <h4>Copy Request for Early Access</h4>
      </div>
    </div>
  );
};

export default Possibilty;
