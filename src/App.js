import React, { Component, useState } from "react";
import ReactTextTransition from "react-text-transition";
import Typical from 'react-typical'
import TypeAnimation from 'react-type-animation';
import axios from "axios"
import Modal from 'react-modal';
import Faq from "react-faq-component";
import YouTube from 'react-youtube';
import Fade from 'react-reveal/Fade';
import Typed from 'react-typed';

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
import liquid from "./assets/liquid.png";
import golden from "./assets/golden.png";

import { Footer, Blog, Possibility, Features, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "./assets/horde-logo.png";
import "./components/navbar/navbar.css";
import twitter from "./assets/logo-twitter.png";
import discord from "./assets/logo-discord.png";
import youtube from "./assets/logo-youtube.png";
import reddit from "./assets/logo-reddit.png";
import logo1 from "./assets/logo-1.png";
import logo2 from "./assets/logo-2.png";
import logo3 from "./assets/logo-3.png";

import './App.css';
import 'reactjs-popup/dist/index.css';

const data = {
  // title: "FAQ (How it works)",
  rows: [
    {
      title: "Where can i trade HORDE tokens?",
      content: `HORDE tokens can ONLY be traded on our Souls Swap: https://dapp.horde.games/soulsswap.`,
    },
    {
      title: "How do I create a HORDE Plot, Souls Stone or Souls Rune?",
      content:
        "Purchase 10 $HORDE tokens for a plot, 5 for a Souls Stone or 1 for a Souls Rune. Only with $BUSD on our official dApp. https://dapp.horde.games/dashboard After you have read T&C, you will discover the dashboard. Use the menu to navigate to Souls Swap. This is where you can use $BUSD to purchase $HORDE tokens. After purchasing tokens, navigate back to the Dashboard and find the ‘Create a Plot’ button. This is where your journey begins.",
    },
    {
      title: "How much does a basic plot payout a day?",
      content: `A basic plot without any NFT scene boost or attachments will reward you with 0.1 $HORDE a day for 300 days. This is 1% per day of your original 10 $HORDE investment. Souls Stones and Souls Runes will also reward 1% per day at equivalent values. The changing factor being the decaying date.`,
    },
    {
      title: "When will I start earning?",
      content: "From the moment your plot is live, you start to receive rewards every 6 hours to the value of 1% per day of your original 10 tokens."
    },
    {
      title: "What is DaaS (De-fi as a Service), explain your intentions with this aspect?",
      content: "A DaaS is a title given to projects in the crypto space which mainly rely on generating profits from investments in order to pay out investors. At HORDE, we generate profits from multiple income streams and only use the idea of DaaS to help generate extra liquidity. We allocate funds to the treasury from the plot creations to be invested into ‘blue chips’ (elite crypto projects) and other cryptocurrencies which can provide profits from yield or staking, etc.. The team will make a poll on multiple projects that are suitable for our criteria. The poll system is only available to verified wallets through our discord verification process, limited to only one vote per member. This prevents any form of manipulation and keeps it fair to all participants."
    },
    {
      title: "Will the game be free to play? Do I have to own a plot, stone or rune?",
      content: "Whilst some elements and competitions will be free for everyone to play, access to the full ecosystem will require ownership of a plot in order to participate. Whilst plots can be expensive for some, we have released Souls Stones and Souls Runes which allow more affordable entries and always do lots of giveaways to the community to give everyone a chance."
    },
    {
      title: "Do I have to play the HORDE game to earn rewards?",
      content: "Participation in the game is not a requirement, however by not playing you miss out on bonuses and competitions that only players get access to."
    },
    {
      title: "Is membership free?",
      content: "Yes! We do not charge any membership fees and only have a 10% sell tax to prevent swing trading of our token."
    },
    {
      title: "What infrastructure are you using for your dApp?",
      content: "The website is deployed with firebase behind cloudflare. Our website is a serverless Single App Page. Meaning that when you reach our domain, it's actually cloudflare load balancer that capture it and distribute you all the files needed to run the dApp with their CDN. Once it's loaded on your device, unless you purge the cache, the dApp will communicate with the blockchain only. So a DDoS will have to take down a big chunk of the internet to get us down. And it'll only take down anyone that did not already loaded the dApp."
    },
    {
      title: "What does it mean that the plots decay?",
      content: "The decaying plots are a part of the protocol that help with creating a new standard of reward payout sustainability. We reward plot owners a 300% ROI, we do not offer ‘lifetime’ payouts. This system creates new opportunities for different node building strategies. Will you claim your ROI and compound 2, or maybe compound all 3 and maximize your rewards by having no claim tax? This dynamic is an exciting new way to create forms of passive node income, all captured within a P2E game with NFT add ons, such as church Square, search and Rescue and wasteland cabin"
    },
    {
      title: "How is the treasury secured?",
      content: "By a multisig accessible to KYCed founders"
    },
    {
      title: "Why do you have a treasury? ",
      content: "This is used as a liquidity buffer, in case extra liquidity is required. The investments can bring extra profits to help build our liquidity. This has never been used for replenishing any part of the protocol since we launched.."
    },
    {
      title: "Are there any wallet limitations? ",
      content: "Yes, a maximum of 100 plots, 2 Souls Stones and 10 Souls Runes. But only max 100 of variation in total."
    },
    {
      title: "Are any token burns planned?",
      content: "No, we have no current plans to burn any tokens. We decided that the supply of 1,111,111 is sufficient for our ecosystem."
    },
    {
      title: "Is there a KYC for the team members?",
      content: "Yes. Find below the link to our KYC by Assure. https://www.assuredefi.io/projects/horde/"
    },
    {
      title: "Does HORDE have an audit?",
      content: "Yes. We had an initial audit by Only Up Capital before launch. We then used funds from the Presale to pay for a full CERTIK audit. Find the link below. https://www.certik.com/projects/horde"
    },
    {
      title: "What happens to my tokens when I purchase a Horde Plot, Souls Stone or Souls Rune?",
      content: "Your tokens will be distributed as per the current tokenomic structure. You cannot claim these back straight away but will receive the daily rewards (every 6 hours) from the moment of creation."
    }
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
  // rowTitleColor: "white",
  rowContentColor: 'white',
  // background: "linear-gradient(89.97deg, #1ED94F 1.24%, #F2F047 50.67%,#ffffff 140.67%)",
  titleTextSize: '10px',
  arrowColor: "white",
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
      displayedText: "people,", showModal: false, toggleMenu: false, color: "rgba(255, 255, 255, 0)",
      videoStatus: 1
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
    if (window.scrollY > 10) {
      console.log("scrolled")
      this.setState({ color: '#040C18' })
    } else {
      this.setState({ color: "rgba(255,255,255,0)" })
    }
  }
  // getTableData() {
  //   let response = null;
  //   new Promise(async (resolve, reject) => {
  //     try {
  //       response = await axios.get('https://api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
  //         headers: {
  //           'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
  //         },
  //       });
  //       // success
  //       const json = response.data;
  //       console.log(json);
  //     } catch (ex) {
  //       response = null;
  //       // error
  //       console.log(ex);
  //       reject(ex);
  //     }

  //   });
  // }
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
              <img src={youtube} className="header-logo" />
              <img src={reddit} className="header-logo" />
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
                  onClick={() => this.setState({ toggleMenu: true })}
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
                      <a href="#faq">FAQs</a>
                    </p>
                    <p>
                      <a href="#blog">Souls Paper</a>
                    </p>
                  </div>
                  {/* <div className="gpt3__navbar-menu_container-links-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                  </div> */}
                </div>
              )}
            </div>
          </div>

          <div className="gpt3__header section__padding section__padding2" id="home">
            <div className="gpt3__header-image2">
              <img className="horde-icon2" src={hordeicon} />
            </div>
            <div className="gpt3__header-content">
              {/* HEADER IMG */}
              <div className="gpt3__header-image">
                <img className="horde-icon" src={hordeicon} />
              </div>
              {/* HEADER TEXT */}
              <h1 className="gradient__text-header2">
                Horde is &nbsp;
                {/* <br /> */}
                <Typed
                  strings={[
                    'innovative symbiosis of a stable coin backed liquidity managed protocol, a P2E game, and LMS stuff',
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                // loop
                >
                </Typed>
              </h1>
              {/* <p>Horde is an innovative symbiosis between a zero membership DaaS with stable coin protocols and an in development P2E zombie defence game, all integrated into a feeless ecosystem.</p> */}
              {/* HEADER BUTTON */}
              <button class="btn btn2">Launch Dapp</button>
              {/* FOG IMG */}
              <img className="fog-image-new" src={fognew} />
            </div>
          </div>
          {/* MODAL */}
          <Modal
            isOpen={this.state.showModal1}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"

            overlayClassName="Overlay"
          >
            <div className="modal-align" onClick={this.handleCloseModal}>
              {/* <img className="modalimage" src={modalimage} /> */}
              <div className="gpt3__whatgpt3-container">
                <div className="gpt3__features-container__feature">
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
          </Modal>
        </div>

        {/* BOXES */}
        <img className="backgrounobj" src={backgrounobj} />
        <Fade bottom>
          <div>
            <WhatGPT3 handleOpenModal={this.handleOpenModal} />
          </div>
        </Fade>

        {/* LMS PARTNERS */}
        <Fade bottom>
          <div className="partners-container">
            <div className="partners-div">

              <h2>Partners</h2>
              <div className="partners-div-row">
                <img src={logo1} className="partners-img" />
                <img src={logo2} className="partners-img" />
                <img src={logo3} className="partners-img2" />
              </div>
            </div>
            <div className="partners-div">
              <h2>LMS Partners</h2>
              <div className="partners-div-row">
                <img src={liquid} className="partners-img" />
                <img src={golden} className="partners-img2" />
              </div>
            </div>
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
              <div className="sub-container-youtube">
                <div className="buttons-column">
                  <button onClick={() => this.setState({ videoStatus: 1 })} className={this.state.videoStatus == 1 ? "active button-youtube" : "button-youtube"}>
                    <h1>
                      Video 1
                    </h1>
                  </button>
                  <button onClick={() => this.setState({ videoStatus: 2 })} className={this.state.videoStatus == 2 ? "active button-youtube" : "button-youtube"}>
                    <h1>
                      Video 2
                    </h1>
                  </button>
                  <button onClick={() => this.setState({ videoStatus: 3 })} className={this.state.videoStatus == 3 ? "active button-youtube" : "button-youtube"}>
                    <h1>
                      Video 3
                    </h1>
                  </button>
                  <button onClick={() => this.setState({ videoStatus: 4 })} className={this.state.videoStatus == 4 ? "active button-youtube" : "button-youtube"}>
                    <h1>
                      Video 4
                    </h1>
                  </button>
                </div>
                {this.state.videoStatus == 1 ?
                  <iframe className="youtube-video" src="//www.youtube.com/embed/AnjV0n59iQo?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                  : null}
                {this.state.videoStatus == 2 ?
                  <iframe className="youtube-video" src="//www.youtube.com/embed/soctahj2yzI?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                  : null}
                {this.state.videoStatus == 3 ?
                  <iframe className="youtube-video" src="//www.youtube.com/embed/AnjV0n59iQo?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                  : null}
                {this.state.videoStatus == 4 ?
                  <iframe className="youtube-video" src="//www.youtube.com/embed/soctahj2yzI?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                  : null}
              </div>
            </div>
          </div>
        </Fade>
        {/* <img className="backgrounobj2" src={backgrounobj} /> */}
        <Fade bottom>
          <div>
            <div className="roadmap">

              <h1 className="gradient__text header-roadmap">ROAD MAP</h1>
              <h2 >The journey so far and beyond…</h2>
              <div class="align">
                <div class="mt-12 relative py-px">
                  <div class="roadmap-line"></div>
                  <div class="roadmap-block">
                    <span class="roadmap-block__circle"></span>
                    <h1 class="text-lava-yellow text-lg font-semibold mb-2">2022 Q1</h1>

                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>18th Feb</strong> - Discord server launched and we started to build our community.</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>1st March</strong> - Souls Paper Volume 1 (litepaper) released.</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>2nd March</strong> - KYC by Assure is complete.</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>14th March</strong> - SOULS SWAP revealed.</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>17th March</strong> - Pre launch AUDIT by Only Up Capital.</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>19th March</strong> - Milestone organic growth of 10k Twitter followers and 5k Discord members.</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>21st March</strong> - PRESALE - SOLD OUT in 28 mins! - $750,000 raised for LM, LP and Certik Audit.</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>22nd March</strong> - LAUNCH DAY - Over $2.5m volume with 2000+ plots created in the first 12   hours,with only 19 hours to our first $100k Treasury milestone.</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>25th March</strong> - $HORDE token listed on Coinmarket Cap and Coingecko.</div>
                    </div>
                  </div>
                  <div class="roadmap-block">
                    <span class="roadmap-block__circle right"></span>
                    <h1 class="text-lava-yellow text-lg font-semibold mb-2">2022 Q2</h1>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>8th April</strong> - $250k Liquidity Pair Campaign initiated.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>11th April</strong> - +6.66% price range increase. From $95-105 up to $99-112.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>20th April</strong> - FLUX partnership announcement.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>22nd April</strong> - Milestone 5000 plots created.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>10th May</strong> - HORDE went live on FLUX.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>11th May</strong> - Presale participants celebrate making ROI.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>13th May</strong> - Our first ever NFT release - NFT Scene - Church Square.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>17th May</strong> - NFT Scene - Search & Rescue release.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>18th May</strong> - CERTIK AUDIT complete.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>21st May</strong> - NFT Scene - Wasteland Cabin.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>26th May</strong> - HORDE present LMS and offer Liquidity Management Service to other protocols.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>8th June</strong> - Our biggest investment poll so far - $420,000!</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>9th June</strong> - Fractional Plots Announced - Souls Runes and Souls Stones.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>12th June</strong> - First LMS partner announced - Golden Society</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>13th June</strong> - Fractional Plots Launched.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>15th June</strong> - New LMS Partner announced - Liquid Capital</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>16th June</strong> - Milestone 10,000 plots created.</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200"><strong>XXth JUNE</strong> - Souls Paper Volume 2 released </div>
                    </div>
                  </div>
                  <div class="roadmap-block">
                    <span class="roadmap-block__circle"></span>
                    <h1 class="text-lava-yellow text-lg font-semibold mb-2">2022 Q3</h1>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">HORDE GAME development and demo releases.</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">HORDE MERCH store.</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">Further LMS partnership announcements</div>
                    </div>
                    <div class="roadmap-div">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">New editions of NFT releases with new utilities TBA</div>
                    </div>
                  </div>
                  <div class="roadmap-block">
                    <span class="roadmap-block__circle right"></span>
                    <h1 class="text-lava-yellow text-lg font-semibold mb-2">2022 Q4</h1>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">HORDE GAME Launch</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">HORDE LIVE a live stream of top leaderboard winners playing for huge cash prizes!</div>
                    </div>
                    <div class="roadmap-div-end">
                      <img className="arrow" src={arrow} />
                      <div class="text-slate-200">Further ecosystem development, becoming the standard for the DEFI space in stability with a huge network of projects implementing LMS.</div>
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
            <div className="faq" id="faq">
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
        {/* <img className="backgrounobj-footer" src={hands} /> */}

      </div >
    )
  }
};

export default App;


{/* <Fade bottom>
          <div>
            <div className="roadmap">

              <h1 className="gradient__text header-roadmap">ROAD MAP</h1>
              <h2 >The journey so far and beyond…</h2>
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
                    <div class="roadmap-div-end2">
                      <img className="arrow2" src={arrow} />
                      <div class="text-slate-201">NFT with new utilities - More scenes, zombie trophies and monuments</div>
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
        </Fade> */}