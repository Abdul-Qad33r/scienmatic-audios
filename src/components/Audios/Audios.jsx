import React, { useEffect, useRef, useState } from "react";
import "./Audios.scss";
import { AudioIcons, AudiosFiles } from "../../assets/Constants";
import { useStateContext } from "../ContextAPI/StateContext";
import { motion } from "framer-motion";

const Audios = () => {
  const [isPlaying, setIsPlaying] = useState();
  const [totalLoaded, setTotalLoaded] = useState(10);
  const [myAudios, setMyAudios] = useState(AudiosFiles.slice(0, totalLoaded));

  const HandleLoadMoreAudios = () => {
    setTotalLoaded((prev) => prev + 10);
  };

  useEffect(() => {
    setMyAudios(AudiosFiles.slice(0, totalLoaded));
  }, [totalLoaded]);
  return (
    <section className="audios">
      <div className="container audios__items">
        <h1 className="audios__heading">TRACK LIST</h1>
        {myAudios.map((audio, index) => (
          <AudioItem
            audio={audio}
            index={index}
            isPlaying={isPlaying === index}
            setIsPlaying={setIsPlaying}
            key={`${index}-${audio}`}
          />
        ))}
        {totalLoaded < AudiosFiles.length && (
          <motion.button
            type="button"
            className="audios__loadMoreBtn"
            onClick={HandleLoadMoreAudios}
          >
            Load more
          </motion.button>
        )}
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

  const whileInView = { x: 0, transition: { duration: 0.3 } };
  const leftVariants = { initial: { x: -150 }, whileInView };
  const rightVariants = { initial: { x: 100 }, whileInView };
  return (
    <div className="audios__items--item">
      <audio ref={getAudio} src={`/audios/${audio}`} preload="metadata" />

      <motion.p
        className="audio--item--index"
        variants={leftVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {index + 1}
      </motion.p>
      <motion.button
        type="button"
        className="audio--item--playPauseBtn"
        onClick={HandlePlayPause}
        variants={leftVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {!getAudio?.current?.paused ? pause : play}
      </motion.button>
      <motion.p
        className="audio--item--name"
        variants={leftVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {getAudio?.current?.paused ? (
          audio.length > 80 ? (
            `${audio.slice(0, 80).split(".mp3").join("")}.....`
          ) : (
            audio.split(".mp3")
          )
        ) : (
          <marquee behavior="scroll" direction="left">
            {audio.split(".mp3")}
          </marquee>
        )}
      </motion.p>
      <motion.p
        className="audio--item--duration"
        variants={rightVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {!duration ? "00:00" : duration}
      </motion.p>
      <motion.button
        type="button"
        className="audio--item--shareBtn"
        variants={rightVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {share}
      </motion.button>
    </div>
  );
};

export default Audios;
