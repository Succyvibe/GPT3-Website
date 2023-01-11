import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 Open AI
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          praesentium! Cum voluptatum earum laborum, architecto, vero
          consequuntur beatae totam nam necessitatibus iure saepe quidem ducimus
          voluptatibus est soluta delectus veniam officia quas ipsam doloribus
          perferendis maxime, nesciunt nostrum. Voluptatem, perspiciatis!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email" />
          <button type="button" className="">
            Get Started
          </button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 requested access a visit the last 24hrs</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
