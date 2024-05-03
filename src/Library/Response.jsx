import React from "react";
import { StyledLibraryDiv } from "../Styles";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function Response(response) {
  console.log(response);
  const navigate = useNavigate();
  const { query } = useParams();
  return (
    <div>
      {response.response !== null && response.response.length > 0 ? (
        <StyledLibraryDiv>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Genre</th>
            </tr>
          </thead>
          {response.response.map((row, index) => (
            <tr
              onClick={() => navigate(`/search/${query}/id/${row.id}`)}
              key={index}
              className="song"
            >
              <td>{row.song}</td>
              <td>{row.artist}</td>
              <td>{row.genre}</td>
            </tr>
          ))}
        </StyledLibraryDiv>
      ) : (
        ""
      )}
    </div>
  );
}

export default Response;
