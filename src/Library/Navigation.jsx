import React, { useEffect, useState } from "react";
import CurrentSong from "../MusicPlayer/CurrentSong";
import {
  MenuIcon,
  StyledNavList,
  StyledNavItem,
  SearchMusicIcon,
  HomeIcon,
  NavContainer,
} from "../Styles";
import { useNavigate } from "react-router-dom";
import music from "../music.json";
import { useGlobalValue } from "../GlobalStates";
function Navigation() {
  const [isClickMenu, setIsClickMenu] = useState(false);
  const { globalData, setGlobalData } = useGlobalValue();
  const navigate = useNavigate();
  const isDesktop = window.innerWidth >= 768;

  useEffect(() => {
    setGlobalData(music);
  }, []);

  return (
    <NavContainer>
      <MenuIcon onClick={() => setIsClickMenu(!isClickMenu)} />
      {isClickMenu && globalData ? (
        <StyledNavList>
          <div
            className="nav-item"
            onClick={() => {
              navigate("/");
              setIsClickMenu(!isClickMenu);
            }}
          >
            <HomeIcon />
            {isDesktop ? <StyledNavItem>Home</StyledNavItem> : ""}
          </div>
          <div
            className="nav-item"
            onClick={() => {
              navigate("/search");
              setIsClickMenu(!isClickMenu);
            }}
          >
            <SearchMusicIcon />
            {isDesktop ? <StyledNavItem>Search</StyledNavItem> : ""}
          </div>
        </StyledNavList>
      ) : (
        ""
      )}
      <CurrentSong />
    </NavContainer>
  );
}

export default Navigation;
