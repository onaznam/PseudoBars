import React, { useState, useEffect } from "react";
import { StyledHomeDiv, StyledDiv } from "./Styles";
import music1 from "./pictures/music1.png";
import music2 from "./pictures/music2.png";

function Home() {
  return (
    <StyledHomeDiv>
      <StyledDiv>
        <h1>Psuedo Bars</h1>
      </StyledDiv>
      <img className="translate-right" src={music1} load="lazy"></img>
      <StyledDiv>
        <p>Find covers for your favorites songs</p>
      </StyledDiv>
      <img className="translate-left" src={music2} load="lazy"></img>
    </StyledHomeDiv>
  );
}

export default Home;
