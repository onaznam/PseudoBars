import Navigation from "./Library/Navigation";
import Search from "./Library/Search";
import Home from "./Home";
import CurrentSong from "./MusicPlayer/CurrentSong";
import { Routes, Route } from "react-router-dom";
import Query from "./Library/Query";
import MiniPlayer from "./MusicPlayer/MusicPlayer";
import { MainContainer } from "./Styles";
function App() {
  return (
    <>
      <MainContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<Query />} />
          <Route path="/search/:query/id/:id" element={<CurrentSong />} />
        </Routes>
        <MiniPlayer />
      </MainContainer>
    </>
  );
}

export default App;
