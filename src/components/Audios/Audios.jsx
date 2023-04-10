import React, { useEffect, useRef, useState } from "react";
import "./Audios.scss";
import { AudioIcons, AudiosFiles } from "../../assets/Constants";

const Audios = () => {
  return (
    <section className="audios">
      <div className="container audios__items">
        <h1>TRACK LIST</h1>
        {AudiosFiles.map((audio, index) => (
          <AudioItem audio={audio} index={index} key={`${index}-${audio}`} />
        ))}
      </div>
    </section>
  );
};

let lastPlayedAudio;
// let lastIsPlaying;

const AudioItem = ({ audio, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState("");
  const { play, pause, share } = AudioIcons;

  const currentAudio = useRef(null);

  const HandlePlayPause = () => {
    lastPlayedAudio && lastPlayedAudio?.pause();
    lastPlayedAudio = currentAudio?.current;
    setIsPlaying((prev) => !prev);
    !isPlaying ? currentAudio?.current?.play() : currentAudio.current.pause();
  };

  function HandleLoadedMetadata() {
    let minutes = Math.floor(currentAudio?.current?.duration / 60);
    let seconds = Math.floor(currentAudio?.current?.duration % 60);
    setDuration(
      `${minutes?.toString().padStart(2, "0")}:${seconds
        ?.toString()
        .padStart(2, "0")}`
    );
  }

  useEffect(() => {
    if (currentAudio.current) {
      currentAudio.current.addEventListener(
        "loadedmetadata",
        HandleLoadedMetadata
      );
      return () =>
        currentAudio.current.removeEventListener(
          "loadedmetadata",
          HandleLoadedMetadata
        );
    }
  }, [
    currentAudio?.current?.loadedmetadata,
    currentAudio?.current?.readyState,
  ]);
  useEffect(() => {
    const HandleAudioEnded = () => {
      setIsPlaying(false);
    };
    currentAudio.current.addEventListener("ended", HandleAudioEnded);
    return () =>
      currentAudio.current.removeEventListener("ended", HandleAudioEnded);
  }, [currentAudio]);

  return (
    <div className="audios__items--item">
      <audio
        ref={currentAudio}
        src={`../../../public/audios/${audio}`}
        preload="metadata"
      />

      <p className="audio--item--index">{index + 1}</p>
      <button
        type="button"
        className="audio--item--playPauseBtn"
        onClick={HandlePlayPause}
      >
        {isPlaying ? pause : play}
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
