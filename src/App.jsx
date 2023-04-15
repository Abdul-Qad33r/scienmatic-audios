import { useState } from "react";
import "./App.css";
import { Audios, Hero, Navbar } from "./components/Container";
import { DotLoader } from "react-spinners";

const App = () => {
  const [check, setCheck] = useState(true);
  window.onload = () => setCheck(false);
  return (
    <>
      {check ? (
        <div className="loader">
          <DotLoader speedMultiplier={2} size={150} color="#ded5c6" />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Audios />
        </>
      )}
    </>
  );
};
export default App;
