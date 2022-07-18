import React from "react";
import "./Main.css";
import intro from "./images/illustration-intro.png";
import anywhere from "./images/icon-access-anywhere.svg";
import time from "./images/icon-collaboration.svg";
import security from "./images/icon-security.svg";
import files from "./images/icon-any-file.svg";
import product from "./images/illustration-stay-productive.png";

const Main = () => {
  return (
    <div className="main">
      <div className="firstdiv">
        <img className="intro" src={intro} alt="" />
        <h2>All your files in one secure location, accessible anywhere.</h2>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them whatever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="flex">
        <div>
          <img src={anywhere} alt="" />
          <h1>Access your files, anywhere</h1>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div>
          <img src={security} alt="" />
          <h1>Security you can trust</h1>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>

        <div>
          <img src={time} alt="" />
          <h1>Real-time collaboration</h1>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div>
          <img src={files} alt="" />
          <h1>Store and type of files</h1>
          <p>
            whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>

      <div className="stayy">
        <img className="product" src={product} alt="" />
        <div className="stay">
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            {" "}
            Security share files and folders with friends, family and collegues
            for live collaboration. No email attachments required.
          </p>
          <a className="see" href="">
            See how Fylo works <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
