import React, { Component, useState } from "react";
import ReactTextTransition from "react-text-transition";
import Typical from 'react-typical'
import TypeAnimation from 'react-type-animation';
import axios from "axios"
import Modal from 'react-modal';
import Faq from "react-faq-component";
import YouTube from 'react-youtube';
import Fade from 'react-reveal/Fade';

import LMS from "./assets/LMS.png";
import LMSTEXT from "./assets/LMS-TEXT.png";
import hordeicon from './assets/horde-logo.png';
import background from './assets/Texture_27.jpg';
import fog from './assets/fog.png';
import fognew from './assets/fog-new.png';
import backgrounobj3 from './assets/backgroundobj.png';
import backgrounobj from './assets/backgroundobj3.png';
import backgrounobj2 from './assets/backgroundobj2.png';
import modalimage from './assets/modal.jpeg';
import arrow from './assets/arrow.png';
import hands from './assets/hands.png';
import handfooter from './assets/hand-footer.png';

import { Footer, Blog, Possibility, Features, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "./assets/horde-logo.png";
import "./components/navbar/navbar.css";
import twitter from "./assets/logo-twitter.png";
import discord from "./assets/logo-discord.png";


import './App.css';
import 'reactjs-popup/dist/index.css';

const data = {
  // title: "FAQ (How it works)",
  rows: [
    {
      title: "Where do I buy HORDE tokens? ",
      content: `HORDE tokens will be able to be bought from SOULS SWAP at launch.`,
    },
    {
      title: "How do I build on my plot?",
      content:
        "Purchase 10 HORDE tokens for each plot and go to the HORDE official website.",
    },
    {
      title: "How much do a basic plot payout a day?",
      content: `A basic plot without any scene upgrade or attachments will reward you with 0.1 HORDE a day.Meaning minimum 300% on maximum 300 days. This is again without ANY type of attachment.`,
    },
    {
      title: "When will I start earning?",
      content: "The exact same moment your plot is live, you start to receive your daily rewards (including plots purchased before game launch)."
    },
    {
      title: "What is DaaS (De-fi as a Service), explain your intentions with this aspect?",
      content: "This is like a hedge fund in crypto space, except we are focusing on investing in leading high yield and Metaverse protocols that we want to integrate into with our game in the near future, all voted for by our community. The team will make a poll on multiple projects that are suitable for our criteria, every time the treasury reaches $100k. The poll system is an Each community verified wallet gets a fair vote, in order to decide the investment, limited to only one vote per member to prevent any form of manipulation and keep it community driven."
    },
    {
      title: "Do I have to own a plot to play the game?",
      content: "Yes, a minimum of 1 plot must be owned to access the free play version of the game, you can purchase HORDE NFT Scenes to enable booster rewards and P2E bonus."
    },
    {
      title: "Do I have to actually “play” to earn?",
      content: "No, basic plots will earn rewards just the same, regardless of if you play the game or not. NFT Scenes upgrades will also continue to pay booster rewards. Of course, not playing the game, means you miss out on P2E bonuses and competitions."
    },
    {
      title: "Is there a membership like other protocol?",
      content: "No, we have a feeless ecosystem."
    },
    {
      title: "Will you be burning tokens?",
      content: "We have no plans to burn tokens, the supply is what we expect to be suitable for the project."
    },
    {
      title: "Are your founders and team doxed?",
      content: "We will be doing an private KYC and audit before launch."
    },
    {
      title: "Does the project have an audit?",
      content: "Certik Audit will be paid, and arranged right after the presale."
    },
    {
      title: "Can I get my money back for the plot?",
      content: "No, the same as other protocols, once a plot is created, you spend your tokens, and the reward mechanism starts for your plot."
    },
    {
      title: "Can I resell my NFT upgrades?",
      content: "Yes, but not all the NFTs… You will be able to sell your NFT scene upgrades such as Shelter, cabin, and military base in a secondary marketplace, but only once unstaked from your plot. Decaying NFTs like ‘Landmines’, ‘Security Fences’ and ‘Laserguns’ will not be available on the secondary marketplace, they will only be available through our official links found on our website."
    },
    {
      title: "What happens to the 10 tokens I spent when I create a plot?",
      content: "60% Reward pool. 20% Treasury. 20% Horde Pool. (See whitepaper for more details)"
    },
    {
      title: "What is the treasury used for?",
      content: "We are focused on investing in Metaverse style projects and other high yield protocols that our community vote for. These funds will be one of many mechanisms we have built in to not only maintain sustainability but will help us later launch in many metaverses."
    },
    {
      title: "Is the treasury locked in any way?",
      content: "Yes, it's a multisig wallet, and cannot just be rugged, stolen or hacked."
    },
    {
      title: "How will your poll system work?",
      content: "Each community verified wallet gets a fair vote, to decide."
    },
    {
      title: "Is there a maximum number of plots per wallet?",
      content: "Yes, a maximum of 100 plots will be owned by any individual wallet."
    },
    {
      title: "What are “decaying plots”?",
      content: "The decaying plots are designed within the protocol to create a new standard of reward payout sustainability. We reward plot owners a 300% ROI, we do not offer unrealistic ‘lifetime’ payouts.  This system creates new opportunities for different node building strategies."
    },
    {
      title: "Will you claim your ROI and compound 2, or maybe compound all 3 and maximize your rewards by having no claim tax?",
      content: "This dynamic is an exciting new way to create forms of passive node income, all captured within a P2E game with NFT add ons."
    },
    {
      title: "What infrastructure are you using for your dApp?",
      content: "The website is deploy with firebase behind cloudflare. Our website is a serverless Single App Page. Meaning that when you reach our domain, it's actually cloudflare load balancer that capture it and distribute you all the files needed to run the dApp with their CDN. Once it's loaded on your device, unless you purge the cache, the dApp will communicate with the blockchain only. So a DDoS will have to take down a big chunk of the internet to get us down. And it'll only take down anyone that did not already loaded the dApp."
    },
  ],
};
const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};
const styles = {
  bgColor: 'rgba(0,0,0,0)',
  titleTextColor: "linear-gradient(89.97deg, #1ED94F 1.24%, #F2F047 50.67%,#ffffff 140.67%)",
  rowTitleColor: "white",
  rowContentColor: 'white',
  titleTextSize: '10px',
};
const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      texts: ["people,", "friends,", "influencers,", "you,"],
      displayedText: "people,", showModal: false, toggleMenu: false, color: "rgba(255, 255, 255, 0)"
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
    this.setState({ color: "rgba(255,255,255,0)" })

  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)

    setInterval(() => {
      this.setState({
        displayedText: this.state.texts[this.state.textIndex],
      });
    }, 3000);
    let response = null;
    // this.getTableData()
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      console.log("scrolled")
      this.setState({ color: '#040C18' })
    } else {
      this.setState({ color: "rgba(255,255,255,0)" })
    }
  }
  getTableData() {
    let response = null;
    new Promise(async (resolve, reject) => {
      try {
        response = await axios.get('https://api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
          headers: {
            'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
          },
        });
        // success
        const json = response.data;
        console.log(json);
      } catch (ex) {
        response = null;
        // error
        console.log(ex);
        reject(ex);
      }

    });
  }
  render() {
    return (
      <div className="App" >
        {/* <img className="background" src={background} /> */}
        <div className="gradient__bg">
          <div className="gpt3__navbar" style={{ backgroundColor: this.state.color }}>
            <div className="gpt3__navbar-links">
              <div className="gpt3__navbar-links_logo">
                <img src={logo} />
              </div>
              <div className="gpt3__navbar-links_container">
                <p>
                  <a href="#home">Project</a>
                </p>
                <p>
                  <a href="#wgpt3">Road Map</a>
                </p>
                <p>
                  <a href="#possibility">Chart</a>
                </p>
                <p>
                  <a href="#features">FAQs</a>
                </p>
                <p>
                  <a href="#blog">Souls Paper</a>
                </p>
              </div>
              <img src={twitter} className="header-logo" />
              <img src={discord} className="header-logo" />
            </div>
            <button class="btn5 btns">Launch Dapp</button>
            <div className="gpt3__navbar-menu">
              {this.state.toggleMenu ? (
                <RiCloseLine
                  color="#fff"
                  size={27}
                  onClick={() => this.setState({ toggleMenu: false })}
                />
              ) : (
                <RiMenu3Line
                  color="#fff"
                  size={27}
                  onClick={() => this.setState({ toggleMenu: false })}
                />
              )}
              {this.state.toggleMenu && (
                <div className="gpt3__navbar-menu_container scale-up-center">
                  <div className="gpt3__navbar-menu_container-links">
                    <p>
                      <a href="#home">Project</a>
                    </p>
                    <p>
                      <a href="#wgpt3">Road Map</a>
                    </p>
                    <p>
                      <a href="#possibility">Chart</a>
                    </p>
                    <p>
                      <a href="#features">FAQs</a>
                    </p>
                    <p>
                      <a href="#blog">Souls Paper</a>
                    </p>
                  </div>
                  <div className="gpt3__navbar-menu_container-links-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="gpt3__header section__padding section__padding2" id="home">
            <div className="gpt3__header-image2">
              <img className="horde-icon2" src={hordeicon} />
            </div>
            <div className="gpt3__header-content">
              <h1 className="gradient__text">
                Horde
                {/* <TypeAnimation
                  steps={["innovative symbiosis", 1000, "P2E zombie defence game", 1000]}
                  loop={Infinity}
                  wrapper="b"
                  /> */}
                <br />
                {/* <TypeAnimation
                  cursor={false}
                  sequence={["Innovating DeFi", 1000, "More than a Daas protocol", 1000]}
                  wrapper="h1"
                /> */}
              </h1>
              <p>Horde is an innovative symbiosis between a zero membership DaaS with stable coin protocols and an in development P2E zombie defence game, all integrated into a feeless ecosystem.</p>
              <div className="header-row">
                <button class="btn btn2">Launch Dapp</button>
              </div>
              <img className="fog-image-new" src={fognew} />

              {/* <div className="gpt3__header-content__people">
                <img src={hordeicon} />
                <p>1,600 people requested access a visit in last 24 hours</p>
              </div> */}
            </div>

            <div className="gpt3__header-image">
              <img className="horde-icon" src={hordeicon} />
            </div>
          </div>
          {/* <button onClick={this.handleOpenModal}>Trigger Modal</button> */}
          <Modal
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"

            overlayClassName="Overlay"
          >
            {/*
            <div className="container-modal">
              <div className="row-modal image-modal">
                <div className="column-modal">
                  <img className="LMS2" src={LMS} />
                  <img className="LMST2" src={LMSTEXT} />
                </div>
                <img className="horde-modal" src={hordeicon} />
              </div>
              <div className="subcontainer-modal">
                <p className="gpt3__header-content gradient__text subheader-modal">Mission statement</p>
                <p>To help solve sustainability and infrastructural challenges for entreprenuers, protocols and dApps in web3.</p>
                <p className="gpt3__header-content gradient__text subheader-modal">Why?</p>
                <p>The first project launched by our team was HORDE. In the midst of one of the worst financial markets of our lives - we flurished.
                  It became clear that our teams broad skill set encompassing developers, entrepreneurs, builders, community managers,
                  marketers and the like was missing from many projects within the space. We believe that by offering our lessons learned,
                  building blocks and expertise we can help uplift the next wave of web3. </p>
              </div>
              <h1 className="gpt3__header-content gradient__text header-modal">"OUR MODEL CREATES WIN-WIN-WIN SCENARIOS. WE WIN ONLY WHEN YOU DO."</h1>

            </div>
            <div className="container-modal">
              <p className="gpt3__header-content gradient__text header-modal2">SERVICES OFFERED</p>
              <div className="row-modal">
                <div className="subcontainer-modal2">
                  <p className="header-modal3">LMS</p>
                  <p className="header-modal3">LIQUIDITY MANAGEMENT SERVICES</p>
                  <p className="text-modal">One of our proprietary contracts created, written and developed over the course of a year will serve as stabilizing force within your community to build confidence, protect participants and enrich the space.</p>
                </div>
                <div className="subcontainer-modal2">
                  <p className="header-modal3">COMMUNITY & MARKETING</p>
                  <p className="text-modal">Our team has deep relationships within the cryptosphere. As a part of labs you will be introduced to every top personality resource and expert to gain insight, exposure and growth.</p>
                </div>
                <div className="subcontainer-modal2">
                  <p className="header-modal3">STRATEGY & DEVELOPMENT</p>
                  <p className="text-modal">The youthe of tommorow will determine the future but wisdom is gained only through experience. Our team includes several business veterans who have built and exited multi-million dolar companies around the globe. We will mentor and help guide you from a business, personal, legal and tax perspective</p>
                </div>
              </div>

              <p className="gpt3__header-content gradient__text header-modal2">THREE LEGGED STOOL*</p>
              <div className="subcontainer-modal3">
                <p className="header-modal3">1. UPFRONT FINANCIAL COMMITMENT</p>
                <p className="text-modal">We reinvest these fund 100% market buying back into your protocol to be stored in our first projects Treasury-HORDE.</p>
              </div>
              <div className="subcontainer-modal3">
                <p className="header-modal3">2. LMS FEES</p>
                <p className="text-modal">We collect between 0.25-0.50% based on the activity of our LM within your protocol. </p>
              </div>
              <div className="subcontainer-modal3">
                <p className="header-modal3">3. WIN-WIN-WIN</p>
                <p className="text-modal">We collect either a % of the team allocation or upside of the profit based on the growth and success of the protocol. If we do not deliver value, we are not rewarded. All tides rise together creating win-win-win relationships.</p>
              </div>
            </div>
 */}
            <div className="modal-align" onClick={this.handleCloseModal}>
              <img className="modalimage" src={modalimage} />
            </div>
          </Modal>
        </div>
        {/* <Brand /> */}
        < img className="backgrounobj" src={backgrounobj} />
        <Fade bottom>
          <div>
            <WhatGPT3 handleOpenModal={this.handleOpenModal} />
          </div>
        </Fade>
        <Fade right>
          <div>
            <img className="hands2" src={hands} />
          </div>
        </Fade>
        {/* <img className="hands" src={hands} /> */}
        <Fade bottom>
          <div>
            <div className="container-youtube">
              <h1 className="gradient__text header-roadmap">JOIN THE HORDE</h1>
              <iframe className="youtube-video" src="//www.youtube.com/embed/AnjV0n59iQo?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </Fade>
        {/* <img className="backgrounobj2" src={backgrounobj} /> */}
        <Fade bottom>
          <div>
            <div className="roadmap">

              <h1 className="gradient__text header-roadmap">ROAD MAP</h1>
              <div class="align">
                <div class="mt-12 relative py-px">
                  <div class="roadmap-line"></div>
                  <div class="roadmap-block">
                    <span class="roadmap-block__circle"></span>
                    <h1 class="text-lava-yellow text-lg font-semibold mb-2">2022 Q1</h1>

                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">KYC by assure</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">Website launch</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">Souls paper v1.0</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">Token launch on Souls swap</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">Certik Audit on launch</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">Epic community giveaways</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">3X NFT scenes to boost rewards</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">Initiate apocalyptic marketing strategy</div>
                    </div>
                  </div>
                  <div class="roadmap-block">
                    <span class="roadmap-block__circle right"></span>
                    <h1 class="text-lava-yellow text-lg font-semibold mb-2">2022 Q2</h1>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">Souls paper v2.0</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">NFT with new utilities - More scenes, zombie trophies and monuments</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">Website 2.0</div>
                    </div>
                  </div>
                  <div class="roadmap-block">
                    <span class="roadmap-block__circle"></span>
                    <h1 class="text-lava-yellow text-lg font-semibold mb-2">2022 Q3</h1>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">Horde game launch</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">NFT skins for weapon, characters, buildings and much more</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">HORDE Live; a live stream where the winners of monthly accolades can play in real time, in front of the community for a huge reward multiplier</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <img className="backgrounobj" src={backgrounobj2} />
        <Fade bottom>
          <div>
            <div className="faq">
              <Fade bottom>
                <div>
                  <h1 className="gradient__text faq-roadmap">FREQUENTLY ASKED QUESTIONS</h1>
                </div>
              </Fade>
              <Faq
                data={data}
                styles={styles}
                config={config}
              />
            </div>
          </div>
        </Fade>

        <Footer />
        {/* <img className="backgrounobj-footer" src={handfooter} /> */}

      </div >
    )
  }
};

export default App;
