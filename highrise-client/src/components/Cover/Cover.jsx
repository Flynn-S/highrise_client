import React, { Component } from "react";

import styled from "styled-components";

import coverBg from "../../images/coverBg.png";
import coverSkyBg from "../../images/coverSkyBg.png";
import highriseLogo from "../../images/highriseLogo.png";
import leftStack from "../../images/leftStack.png";
import rightStack from "../../images/rightStack.png";
import towerblocksMg from "../../images/towerblocksMg.png";
import trumpetFg from "../../images/trumpetFg.png";

export default class Cover extends Component {
  render() {
    return (
      <ImageContainer>
        <img src={coverBg} id="bg" alt="bg1"></img>
        <img src={coverSkyBg} id="sky-bg" alt="bg2"></img>
        <img src={leftStack} id="LS" alt="left speaker stack"></img>
        <img src={rightStack} id="RS" alt="right speaker stack"></img>
        <img src={towerblocksMg} id="mg" alt="towerblocks"></img>
        <img src={trumpetFg} id="fg" alt="trumpet and record player"></img>
        <img src={highriseLogo} id="logo" alt="highrise logo"></img>

        {/* <img src="../public/images/coverBg" id="bg" alt="bg1"></img>
        <img src="./images/coverSkyBg" id="sky-bg" alt="bg2"></img>
        <img src="/images/leftStack" id="LS" alt="left speaker stack"></img>
        <img src="/images/rightStack" id="RS" alt="right speaker stack"></img>
        <img src="/images/towerblocksMg" id="mg" alt="towerblocks"></img>
        <img src="/images/trumpetFg" id="fg" alt="trumpet foreground"></img>
        <img src="/images/highriseLogo" id="logo" alt="highrise logo"></img> */}
      </ImageContainer>
    );
  }
}

const ImageContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    // content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to top, #fff, transparent;
    z-index: 10000;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
