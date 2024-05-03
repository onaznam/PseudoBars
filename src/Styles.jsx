import { styled, createGlobalStyle, keyframes } from "styled-components";
import { IoIosMenu } from "react-icons/io";
import { TbMusicSearch, TbSearch } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

export const GlobalStyles = createGlobalStyle`
    body{
        font-family: "Roboto", sans-serif;
        background:
        linear-gradient(to right, #f55d5d, #7474ff) fixed, 
        linear-gradient(to bottom, #1bf81b, yellow) fixed, 
        linear-gradient(to left, orange, #ff35ff) fixed; 
        background-size: cover;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        img{
            height: 50%;
            width: 100%;
          }

        button{
          font-family: "Roboto", sans-serif;
        }
        h1{
          font-family: "Playfair Display SC", serif;
          font-weight: normal;
        }
        h2,h3{
          font-weight: normal;
        }
        @media only screen and (min-width: 768px) and (max-width: 1000px){
            width: 75%;
            img{
              height: 75%;
              width: 75%
            }
        }
        @media only screen and (min-width: 1000px){
            width: 50%;
            height: 50%;
        }
        
    }
`;

export const translateRight = keyframes`
  0% {transform: translateX(1080px)};
  50% {transform: translateX(0)};
  100% {transform: translateX(1080px)};
`;

export const translateLeft = keyframes`
  0% {transform: translateX(-1080px)};
  50% {transform: translateX(0)};
  100% {transform: translateX(-1080px)};
`;

export const translateLeftMobile = keyframes`
  0% {transform: translateX(540px)};
  50% {transform: translateX(0)};
  100% {transform: translateX(-540px)};
`;

export const translateRightMobile = keyframes`
  0% {transform: translateX(-540px)};
  50% {transform: translateX(0)};
  100% {transform: translateX(540px)};
`;

//wraps the body
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

//home component
export const StyledHomeDiv = styled.div`
  overflow-x: hidden;
  position: relative;
  .translate-right {
    animation: ${translateRightMobile} 10s linear infinite;
    @media only screen and (min-width: 768px) {
      animation: ${translateRight} 10s linear infinite;
    }
  }
  .translate-left {
    animation: ${translateLeftMobile} 10s linear infinite;
    @media only screen and (min-width: 768px) {
      animation: ${translateLeft} 10s linear infinite;
    }
  }
`;

export const NavContainer = styled.div`
  width: 100%;
`;

//nav drop down menu
export const StyledNavList = styled.ul`
  width: 10%;
  margin-left: -1.8rem;
  margin-top: -0.5rem;
  list-style: none;
  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0.5rem;
    gap: 1rem;
    padding: 1rem;
    border-radius: 8px;
    background-color: #000000;
    color: white;
    transition: transform 0.4s ease;

    &:hover {
      cursor: pointer;
      background-color: #3d3d3d;
      transform: scale(1.1);
    }
  }
`;

//nav menu icon
export const MenuIcon = styled(IoIosMenu)`
  margin-left: 0.5rem;
  height: 3rem;
  width: 3rem;
  transition: transform 0.4s ease;
  &:hover {
    transform: scale(1.15);
    cursor: pointer;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
  box-shadow: 0 2px 4px rgba(0.4, 0.4, 0.1, 0.4);
  background: linear-gradient(to right, #ff9d9d, #acacff) fixed,
    linear-gradient(to bottom, #97ff97, #ffffc4) fixed,
    linear-gradient(to left, #fec65f, #ff8dff) fixed;
`;

export const StyledSearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StyledHeadingDiv = styled.div`
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0.1, 0.1, 0.3, 0.4);
  background: linear-gradient(to left, #ff9d9d, #acacff) fixed,
    linear-gradient(to right, #97ff97, #ffffc4) fixed,
    linear-gradient(to top, #fec65f, #ff8dff) fixed;
`;

export const StyledQueryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  input {
    font-size: 1.5rem;
    &:hover {
      transform: scale(1.05);
    }
  }
  button {
    height: 100%;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: pink;
    border: none;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
  .inline-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 50%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0.4, 0.4, 0.1, 0.4);
  background: linear-gradient(to right, #ff9d9d, #acacff) fixed,
    linear-gradient(to bottom, #97ff97, #ffffc4) fixed,
    linear-gradient(to left, #fec65f, #ff8dff) fixed;
  color: #000000;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const StyledMusicBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  gap: 1.5rem;

  .song-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }

  img {
    height: 5rem;
    width: 5rem;
  }
`;

export const StyledNavItem = styled.li`
  margin: 0.3rem;
`;

export const StyledLibraryDiv = styled.div`
  margin-bottom: 10rem;
  box-shadow: 0 2px 4px (0.2, 0.3, 0.1, 0.2);
  border-radius: 16px;
  padding: 1rem;
  text-align: center;
  background: linear-gradient(to right, #ff9d9d, #acacff) fixed,
    linear-gradient(to bottom, #97ff97, #ffffc4) fixed,
    linear-gradient(to left, #fec65f, #ff8dff) fixed;
  th,
  td {
    padding: 15px;
  }
  th {
    background: linear-gradient(to right, #ff8787, #8484ff) fixed,
      linear-gradient(to bottom, #376937, #ffff00) fixed,
      linear-gradient(to left, #b58937, #ffadff) fixed;
  }
  .song {
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;

export const StyledCurrentSongDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
`;

export const RecommendedSongsDiv = styled.div`
  img {
    height: 250px;
    width: 200px;
    @media only screen and (max-width: 768px) {
      height: 200px;
      width: 150px;
    }
  }
`;

export const SearchMusicIcon = styled(TbMusicSearch)``;
export const HomeIcon = styled(IoHomeOutline)``;

export const SearchIcon = styled(TbSearch)`
  font-size: 2rem;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const PlayIcon = styled(FaPlay)`
  cursor: pointer;
`;

export const PauseIcon = styled(FaPause)`
  cursor: pointer;
`;

export const SkipForwardIcon = styled(FaForward)`
  cursor: pointer;
`;

export const SkipBackwardIcon = styled(FaBackward)``;
