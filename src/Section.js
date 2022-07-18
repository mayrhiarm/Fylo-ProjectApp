import React from "react";
import "./Main.css";
import quote from "./images/bg-quotes.png";
import profile1 from "./images/profile-1.jpg";
import profile2 from "./images/profile-2.jpg";
import profile3 from "./images/profile-3.jpg";

const Section = () => {
  return (
    <div className="section">
      <img className="quote" src={quote} alt="" />
      <div className="close">
        <div className="fylo zz">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="inner-fylo">
            <img src={profile1} alt="" />
            <div>
              <h2>Satish Patel</h2>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="fylo zz">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="inner-fylo">
            <img src={profile2} alt="" />
            <div>
              <h2>Bruce McKenzie</h2>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="fylo">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="inner-fylo">
            <img src={profile3} alt="" />
            <div>
              <h2>Iva Boyd</h2>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>

      <div className="getearly">
        <div>
          <h1>Get early access today</h1>
          <p>
            it only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>  
        <div className="won">
          <input
            className="input"
            type="text"
            placeholder="email@example.com"
          />
          <button className="free">Get Started For Free</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
