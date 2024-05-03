import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledHeadingDiv, StyledSearchDiv } from "../Styles";
function Search() {
  const navigate = useNavigate();
  return (
    <StyledSearchDiv>
      <StyledHeadingDiv>
        <h1>Search by</h1>
      </StyledHeadingDiv>
      <StyledButton onClick={() => navigate("/search/song")}>
        <h2>Song</h2>
      </StyledButton>
      <StyledButton onClick={() => navigate("/search/genre")}>
        <h2>Genre</h2>
      </StyledButton>
      <StyledButton onClick={() => navigate("/search/artist")}>
        <h2>Artist</h2>
      </StyledButton>
    </StyledSearchDiv>
  );
}

export default Search;
