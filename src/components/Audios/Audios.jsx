import React, { useEffect, useRef, useState } from "react";
import "./Audios.scss";
import { AudioIcons, AudiosFiles } from "../../assets/Constants";
import { useStateContext } from "../ContextAPI/StateContext";

const Audios = () => {
  const [isPlaying, setIsPlaying] = useState();
  return (
    <section className="audios">
      <div className="container audios__items">
        <h1 className="audios__heading">TRACK LIST</h1>
        {AudiosFiles.map((audio, index) => (
          <AudioItem
            audio={audio}
            index={index}
            isPlaying={isPlaying === index}
            setIsPlaying={setIsPlaying}
            key={`${index}-${audio}`}
          />
        ))}
      </div>
    </section>
  );
};

let lastPlayedAudio;
let allAudioElements = [];

const AudioItem = ({ audio, index, isPlaying, setIsPlaying }) => {
  const [isClickedAgain, setIsClickedAgain] = useState(false);
  const [duration, setDuration] = useState("");
  const getAudio = useRef(null);

  const { play, pause, share } = AudioIcons;

  const { setAudioPlaying, setHeroPlaying } = useStateContext();

  let currentAudio;
  setTimeout(() => {
    getAudio && (currentAudio = getAudio?.current);
  }, 0);

  useEffect(() => {
    !allAudioElements.includes(getAudio?.current) &&
      allAudioElements.push(getAudio?.current);
    setAudioPlaying(allAudioElements[0]);
    lastPlayedAudio = allAudioElements[0];
  }, []);

  const HandlePlayPause = () => {
    setAudioPlaying(currentAudio);

    lastPlayedAudio && lastPlayedAudio?.pause();
    lastPlayedAudio = currentAudio;

    setIsClickedAgain((prev) => !prev);
    setIsPlaying(index);

    isPlaying && isClickedAgain ? currentAudio?.pause() : currentAudio?.play();

    setHeroPlaying(!currentAudio?.paused);
  };

  function HandleLoadedMetadata() {
    let minutes = Math.floor(currentAudio?.duration / 60);
    let seconds = Math.floor(currentAudio?.duration % 60);
    setDuration(
      `${minutes?.toString().padStart(2, "0")}:${seconds
        ?.toString()
        .padStart(2, "0")}`
    );
  }

  useEffect(() => {
    if (currentAudio) {
      currentAudio?.addEventListener("loadedmetadata", HandleLoadedMetadata);
      return () =>
        currentAudio?.removeEventListener(
          "loadedmetadata",
          HandleLoadedMetadata
        );
    }
  }, [currentAudio?.loadedmetadata, currentAudio?.readyState]);
  useEffect(() => {
    const HandleAudioEnded = () => {
      setIsPlaying(false);
    };
    currentAudio?.addEventListener("ended", HandleAudioEnded);
    return () => currentAudio?.removeEventListener("ended", HandleAudioEnded);
  }, [getAudio]);

  return (
    <div className="audios__items--item">
      <audio ref={getAudio} src={`/audios/${audio}`} preload="metadata" />

      <p className="audio--item--index">{index + 1}</p>
      <button
        type="button"
        className="audio--item--playPauseBtn"
        onClick={HandlePlayPause}
      >
        {!getAudio?.current?.paused ? pause : play}
      </button>
      <p className="audio--item--name">{audio.split(".mp3")}</p>
      <p className="audio--item--duration">{!duration ? "00:00" : duration}</p>
      <button type="button" className="audio--item--shareBtn">
        {share}
      </button>
    </div>
  );
};

export default Audios;
