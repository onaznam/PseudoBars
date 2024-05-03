import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { StyledDiv, RecommendedSongsDiv } from "../Styles";
import { useGlobalValue } from "../GlobalStates";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
import { useParams, useNavigate } from "react-router-dom";

function RecommendedSongs({ songRecommendations }) {
  const { query } = useParams();
  const navigate = useNavigate();
  return (
    <RecommendedSongsDiv>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          autoplay: true,
          pauseOnHover: true,
          rewind: true,
          speed: 400,
          width: 300,
          //   height: 400,
        }}
      >
        {songRecommendations.map((song, index) => (
          <SplideSlide
            onClick={() => navigate(`/search/${query}/id/${song.id}`)}
            style={{
              background: "white",
              marginBottom: "1.5rem",
              cursor: "pointer",
            }}
            key={index}
          >
            <img src={song.picture} alt={`song ${index}`} />
            <h3 style={{ marginBottom: "0.5rem" }}>
              {song.song} - {song.artist}
            </h3>
          </SplideSlide>
        ))}
      </Splide>
    </RecommendedSongsDiv>
  );
}

export default RecommendedSongs;
