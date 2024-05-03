import React, { useEffect, useState, useRef } from "react";
import RecommendedSongs from "./RecommendedSongs";
import { useParams } from "react-router-dom";
import { useGlobalValue } from "../GlobalStates";
import music from "../music.json";
import { StyledCurrentSongDiv, StyledHeadingDiv, StyledDiv } from "../Styles";
function CurrentSong() {
  const [currSong, setCurrSong] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [songRecommendations, setSongRecommendations] = useState(null);
  const { id } = useParams();
  const { setGlobalId, globalData, globalId } = useGlobalValue();

  const getSongData = () => {
    if (globalData) {
      const songData = globalData.find((item) => item.id === parseInt(id));
      setCurrSong(songData);
      setGlobalId(id);
    }
  };

  const getRecommendedSongs = () => {
    if (globalData && currSong) {
      const recommendations = globalData.filter(
        (item) => item.genre === currSong.genre && item.song !== currSong.song
      );
      setSongRecommendations(recommendations);
    }
  };

  useEffect(() => {
    getSongData();
  }, [globalData, id]);

  useEffect(() => {
    getRecommendedSongs();
  }, [currSong]);

  useEffect(() => {
    if (currSong) {
      setIsLoaded(true);
    }
  }, [currSong]);
  return (
    <div>
      {isLoaded ? (
        <StyledCurrentSongDiv style={{}}>
          <StyledHeadingDiv style={{ padding: "1.5rem" }}>
            <h2>Other Songs like this</h2>
            <StyledDiv style={{ background: "white", padding: "0.5rem" }}>
              <RecommendedSongs songRecommendations={songRecommendations} />
            </StyledDiv>
          </StyledHeadingDiv>
        </StyledCurrentSongDiv>
      ) : (
        ""
      )}
    </div>
  );
}

export default CurrentSong;
