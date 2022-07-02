import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import fog from "../../assets/fog.png";
import LMS from "../../assets/LMS-LOGO.png";
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
          <h1>THE HORDE ECOSYSTEM</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>
            The HORDE Ecosystem, a stabilised price innovation with zero
            membership, claim and compounding fees. Merging DEFI, decaying plots
            and NFTs with a P2E zombie defence game! Enter the wasteland to find
            out what else zombies can do.
          </p>
        </div>
      </div>

      <div className="gpt3__features-container__feature">
        <img className="icon-image" src={icon2} />
        {/* <img className="fog-image-modal" src={fog} /> */}
        <div className="gpt3__features-container__feature-title">
          <div />
          <h1>LIQUIDITY MANAGER</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>
            Our Liquidity manager, the brains behind our infamous flatline chart
            and the star of our LMS. Since launch, it has delivered a stable
            passive reward system with our tokens price kept inside a range of
            around 10%.
          </p>
        </div>
      </div>
      <button
        onClick={props.handleOpenModal}
        className="gpt3__features-container__feature"
      >
        {/* <img className="fog-image-modal" src={fog} /> */}
        <img className="LMS" src={LMS} />
        <div className="gpt3__features-container_feature-text">
          <p>
            Our Liquidity manager, the brains behind our infamous flatline chart
            and the star of our LMS. Since launch, it has delivered a stable
            passive reward system with our tokens price kept inside a range of
            around 10%.
          </p>
        </div>
      </button>
    </div>
    <div className="gpt3__whatgpt3-container">
      <div className="gpt3__features-container__feature">
        <img className="icon-image" src={icon3} />
        {/* <img className="fog-image-modal" src={fog} /> */}
        <div className="gpt3__features-container__feature-title">
          <div />
          <h1>HORDE TREASURY</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>
            A portion of the tokens from plot creations go toward building our
            Treasury. A fund used as a 'liquidity buffer'. With over $1 million
            invested into 'blue chips' and profit yielding protocols, its
            purpose is to aid liquidity, if ever required. The treasury has
            never been used to replenish any funds to the protocol and continues
            to grow.
          </p>
        </div>
      </div>
      <div className="gpt3__features-container__feature">
        <img className="icon-image" src={icon4} />
        {/* <img className="fog-image-modal" src={fog} /> */}
        <div className="gpt3__features-container__feature-title">
          <div />
          <h1>ZOMBIE P2E DEFENCE GAME</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>
            Being built in the background, we are releasing a P2E zombie defence
            game, with NFT utility. Leading up to launch, we will be giving our
            community sneak peeks of the developments.
          </p>
        </div>
      </div>
      <div className="gpt3__features-container__feature">
        <img className="icon-image" src={icon5} />
        {/* <img className="fog-image-modal" src={fog} /> */}
        <div className="gpt3__features-container__feature-title">
          <div />
          <h1>ENHANCED NFTs</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>
            Our NFTs have different uses in our ecosystem. They are the tools we
            use to combine the different branches of our protocol. From
            increasing reward % on plots to changing your characters skins.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WhatGPT3;
