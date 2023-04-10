import { createContext, useContext, useState } from "react";

const context = createContext();

export const StateContext = ({ children }) => {
  const [listenNow, setListenNow] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(
    "/audios/Assubhu Bada - Naat.mp3"
  );
  return (
    <context.Provider
      value={{
        audioPlaying,
        setAudioPlaying,
        listenNow,
        setListenNow,
      }}
    >
      {children}
    </context.Provider>
  );
};
export const useStateContext = () => useContext(context);
