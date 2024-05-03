import React, { useEffect, useState } from "react";
import { useGlobalValue } from "../GlobalStates";
import {
  StyledMusicBar,
  PlayIcon,
  PauseIcon,
  SkipBackwardIcon,
  SkipForwardIcon,
} from "../Styles";
import { useRef } from "react";

function MusicBar() {
  const { globalId, globalData, setGlobalId } = useGlobalValue();
  const [song, setSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLength, setAudioLength] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [startMins, setStartMins] = useState(0);
  const [startSecs, setStartSecs] = useState(0);
  const [endMins, setEndMins] = useState(0);
  const [endSecs, setEndSecs] = useState(0);
  const audioRef = useRef(null);

  const handleSkip = () => {
    if (song) {
      const filteredGenre = globalData.filter(
        (item) => item.genre === song.genre
      );
      const randomSong =
        filteredGenre[Math.floor(Math.random() * filteredGenre.length)];
      setGlobalId(randomSong.id);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleSongSlider = (e) => {
    if (audioRef.current) {
      audioRef.current.currentTime = e.target.value;
    }
  };

  //update the song globally
  const updateSong = () => {
    if (globalData) {
      const match = globalData.find((item) => item.id === parseInt(globalId));
      setSong(match);
    }
  };

  //once data loads you can update the song
  useEffect(() => {
    if (globalData) {
      updateSong();
    }
  }, [globalId, globalData]);

  //once the song is set, play the song
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [song]);

  //audio is mounted
  useEffect(() => {
    const calculateDuration = () => {
      if (audioRef.current) {
        const duration = audioRef.current.duration;
        setAudioLength(duration);
      }
    };
    if (audioRef.current && song) {
      audioRef.current.addEventListener("loadedmetadata", calculateDuration);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener(
          "loadedmetadata",
          calculateDuration
        );
      }
    };
  }, [song]);

  //if a song is playing update every second
  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef) {
        setCurrentTime(audioRef.current.currentTime);
        const timeStart = Math.floor(audioRef.current.currentTime);
        const timeLeft =
          Math.floor(audioRef.current.duration) -
          Math.floor(audioRef.current.currentTime);
        setStartMins(Math.floor(timeStart / 60));
        setEndMins(Math.floor(timeLeft / 60));
        const startSeconds = timeStart % 60;
        const endSeconds = timeLeft % 60;
        setEndSecs(endSeconds);
        setStartSecs(startSeconds);
      }
    };
    if (isPlaying) {
      const interval = setInterval(updateCurrentTime, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div>
      {globalId && song ? (
        <StyledMusicBar>
          <div>
            <img src={song.picture} />
          </div>
          <div className="song-details">
            <h3>
              {song.song} - {song.artist}
            </h3>
            <input
              type="range"
              min={0}
              max={audioLength}
              value={audioRef.current ? audioRef.current.currentTime : 0}
              onChange={toggleSongSlider}
            ></input>
            <audio ref={audioRef} src={song.audio} controls={false}></audio>
            <div className="buttons">
              <div style={{ display: "flex" }}>
                <h3>{startMins}:</h3>
                {startSecs < 10 ? <h3>0{startSecs}</h3> : <h3>{startSecs}</h3>}
              </div>
              {isPlaying ? (
                <PauseIcon onClick={toggleAudio} />
              ) : (
                <PlayIcon onClick={toggleAudio} />
              )}
              <SkipForwardIcon onClick={handleSkip} />
              <div style={{ display: "flex" }}>
                <h3>{endMins}:</h3>
                {endSecs < 10 ? <h3>0{endSecs}</h3> : <h3>{endSecs}</h3>}
              </div>
            </div>
          </div>
        </StyledMusicBar>
      ) : (
        ""
      )}
    </div>
  );
}

export default MusicBar;
