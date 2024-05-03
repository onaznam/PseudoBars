import React, { useEffect, useState } from "react";
import Response from "./Response";
import { SearchIcon, StyledQueryDiv, StyledHeadingDiv } from "../Styles";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalValue } from "../GlobalStates";

function Query() {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState(null);
  const [isBadInput, setIsBadInput] = useState(false);
  const { globalData } = useGlobalValue();
  const { query } = useParams();
  const navigate = useNavigate();

  const handleInput = (e) => {
    if (isBadInput) {
      setIsBadInput(false);
    }
    const input = e.target.value;
    if (/^[A-Za-z ]*$/.test(input)) {
      setSearch(input);
    } else {
      setIsBadInput(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === "enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const trimSearch = search.trim();
    if (trimSearch.length >= 3 && globalData) {
      const matches = globalData.filter((item) =>
        item[query].toLowerCase().includes(trimSearch.toLowerCase())
      );
      setResponse(matches);
    } else if (trimSearch.toLowerCase() === "") {
      setResponse(globalData);
    } else {
      console.log("not long enough");
      setResponse(null);
    }
    setSearch("");
  };

  return (
    <StyledQueryDiv>
      <StyledHeadingDiv>
        <h1>Search by: {query}</h1>
      </StyledHeadingDiv>
      <div className="inline-item">
        <input
          placeholder="enter prints all"
          value={search}
          type="text"
          onChange={handleInput}
          onKeyDown={handleKeyPress}
          maxLength={15}
        ></input>
        <SearchIcon onClick={handleSearch} />
      </div>
      {isBadInput ? (
        <StyledHeadingDiv>
          <h3>Bad input</h3>
        </StyledHeadingDiv>
      ) : (
        ""
      )}
      <StyledHeadingDiv>
        <div className="inline-item">
          <h2>Swap to</h2>
          {query !== "artist" ? (
            <button onClick={() => navigate("/search/artist")}>Artist</button>
          ) : (
            ""
          )}
          {query !== "song" ? (
            <button onClick={() => navigate("/search/song")}>Song</button>
          ) : (
            ""
          )}
          {query !== "genre" ? (
            <button onClick={() => navigate("/search/genre")}>Genre</button>
          ) : (
            ""
          )}
        </div>
      </StyledHeadingDiv>
      <Response response={response} />
    </StyledQueryDiv>
  );
}

export default Query;
