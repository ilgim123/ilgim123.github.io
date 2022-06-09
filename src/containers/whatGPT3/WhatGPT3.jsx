import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import fog from "../../assets/fog.png";
import LMS from "../../assets/LMS.png";
import LMSTEXT from "../../assets/LMS-TEXT.png";
import backgrounobj from "../../assets/backgroundobj.png";
import FadeIn from "react-fade-in";

const WhatGPT3 = (props) => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    {/* <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
   */}
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Horde is an innovative symbiosis</h1>
      <p>Explore the Dapp</p>
    </div>

    <div className="gpt3__whatgpt3-container">
      <div className="gpt3__features-container__feature">
        <img className="icon-image" src={icon1} />
        {/* <img className="fog-image-modal" src={fog} /> */}

        <div className="gpt3__features-container__feature-title">
          <div />
          <h1>TOKEN ECOSYSTEM</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>
            No membership, free to compound, all in a feeless ecosystem, with
            only a 10% tax on sales, preventing swing trading of our tokens
            value. P2E zombie defence game with multiple NFT utilities coming
            soon, and the ability to play with friends.
          </p>
        </div>
      </div>

      <div className="gpt3__features-container__feature">
        <img className="icon-image" src={icon2} />
        {/* <img className="fog-image-modal" src={fog} /> */}
        <div className="gpt3__features-container__feature-title">
          <div />
          <h1>REWARD SYSTEM</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>
            Our reward system is based on stable coin tokenomics, this ensures
            the sustainability of our ecosystem.Unique Stablised Payout
            Protocol. Our smart contract uses the same strategy as a stable
            coin, to ensure the sustainability of our reward system.
          </p>
        </div>
      </div>
      <div className="gpt3__features-container__feature">
        <img className="icon-image" src={icon3} />
        {/* <img className="fog-image-modal" src={fog} /> */}
        <div className="gpt3__features-container__feature-title">
          <div />
          <h1>TREASURY</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>
            Each time the treasury hits 100k we will ask the community to vote
            on a range of DeFi projects to invest in.
          </p>
        </div>
      </div>
    </div>
    <div className="gpt3__whatgpt3-container">
      <div className="gpt3__features-container__feature">
        <img className="icon-image" src={icon4} />
        {/* <img className="fog-image-modal" src={fog} /> */}
        <div className="gpt3__features-container__feature-title">
          <div />
          <h1>P2E GAME</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>
            P2E zombie defence game with multiple NFT utilities coming soon, and
            the ability to play with friends.
          </p>
        </div>
      </div>
      <div className="gpt3__features-container__feature">
        <img className="icon-image" src={icon5} />
        {/* <img className="fog-image-modal" src={fog} /> */}
        <div className="gpt3__features-container__feature-title">
          <div />
          <h1>NFTS</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>
            NFT scenes, weapons, and skins, make your plot customisable with
            some even boosting rewards.
          </p>
        </div>
      </div>
      <button
        onClick={props.handleOpenModal}
        className="gpt3__features-container__feature"
      >
        {/* <img className="fog-image-modal" src={fog} /> */}
        <img className="LMS" src={LMS} />
        <img className="LMST" src={LMSTEXT} />
      </button>
    </div>
  </div>
);

export default WhatGPT3;
