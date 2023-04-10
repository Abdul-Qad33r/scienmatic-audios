import React, { useState } from "react";
import "./Hero.scss";
import { AudioIcons, HeaderImages } from "../../assets/Constants";
import { useStateContext } from "../ContextAPI/StateContext";

const Hero = () => {
  const { audioPlaying, listenNow } = useStateContext();
  const listening = () => {
    let audio = document.querySelector(
      `[src='../../../public${audioPlaying
        .replaceAll("%", " ")
        .replaceAll("20", "")}'`
    );
    audio.nextSibling?.nextSibling?.click();
  };
  return (
    <section className="hero">
      <div className="hero__background-image"></div>

      <div className="container flex hero__container">
        <div className="hero__left flex">
          <div className="hero__left--text">
            <p>
              <span>Instinct</span> — Released May 22, 2020
            </p>
          </div>
          <div className="hero__left--img">
            <img src={HeaderImages.jpeg} alt="" />
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__right--text">
            <h1>LEVEL DAYS</h1>
            <h1>CONRO</h1>
          </div>

          <div className="hero__right__buttons">
            <button
              type="button"
              className="hero__right__buttons--listenNow"
              onClick={listening}
            >
              <span>{listenNow ? AudioIcons.pause : AudioIcons.play}</span>
              LISTEN NOW
            </button>
            <button type="button" className="hero__right__buttons--share">
              <span>{AudioIcons.share}</span>SHARE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
