import React from "react";
import gpt3Logo from "../../assets/hordelogo.webp";
import logo1 from "../../assets/logo-1.png";
import logo2 from "../../assets/logo-2.png";
import logo3 from "../../assets/logo-3.png";
import twitter from "../../assets/logo-twitter.png";
import discord from "../../assets/logo-discord.png";
import reddit from "../../assets/logo-reddit.png";
import youtube from "../../assets/logo-youtube.png";
import "./footer.css";
import hands from "../../assets/hands.png";
import liquid from "../../assets/liquid.png";
import golden from "../../assets/golden.png";

const Footer = () => (
  <div className="gpt3__footer section__padding3">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">JOIN THE HORDE</h1>
    </div>
    {/* <img className="backgrounobj-footer" src={hands} /> */}

    <div className="gpt3__footer-btn">
      <p>Launch Dapp</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          Horde <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Partners</h4>
        <div className="gpt3__footer-links_row">
          <img src={logo1} className="footer-logo" />
          <img src={logo2} className="footer-logo" />
          <img src={logo3} className="footer-logo" />
        </div>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>LMS Partners</h4>
        <div className="gpt3__footer-links_row">
          <img src={liquid} className="footer-logo3" />
          <img src={golden} className="footer-logo4" />
        </div>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Socials</h4>
        <div className="gpt3__footer-links_row">
          <img src={reddit} className="footer-logo2" />
          <img src={discord} className="footer-logo2" />
          <img src={twitter} className="footer-logo2" />
          <img src={youtube} className="footer-logo2" />
        </div>
      </div>
    </div>
    <div className="gpt3__footer-copyright">
      <p>@2022 All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
