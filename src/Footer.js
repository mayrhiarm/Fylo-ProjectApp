import React from "react";
import logo from "./images/logo.svg";
import location from "./images/icon-location.svg";
import phone from "./images/icon-phone.svg";
import email from "./images/icon-email.svg";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="" />
        <div className="grow">
          <div className="lorem">
            <img className="location" src={location} alt="" />
            <p className="lot">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus numquam dolore veniam vitae provident doloribus quod?
              Aliquid repellendus animi eos, minus culpa, ipsa, blanditiis quam
              reiciendis ea fugit commodi saepe?
            </p>
          </div>
          <div>
            <div className="phone">
              <img className="phonee" src={phone} alt="" />
              <p> +1-543-123-4567</p>
            </div>
            <div className="example">
              <img className="email" src={email} alt="" />
              <p>example@fylo.com</p>
            </div>
          </div>

          <div className="about">
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div className="us">
            <p>Contact Us</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
          <div className="myimg">
            <img className="images" src={facebook} alt="" />
            <img className="images" src={twitter} alt="" />
            <img className="images" src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
