import { createContext, useContext, useState } from "react";

const context = createContext();

export const StateContext = ({ children }) => {
  const [audioPlaying, setAudioPlaying] = useState();
  const [heroPlaying, setHeroPlaying] = useState(false);
  return (
    <context.Provider
      value={{
        audioPlaying,
        setAudioPlaying,
        heroPlaying,
        setHeroPlaying,
      }}
    >
      {children}
    </context.Provider>
  );
};
export const useStateContext = () => useContext(context);
