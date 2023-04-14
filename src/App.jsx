import { useState } from "react";
import "./App.css";
import { Audios, Hero, Navbar } from "./components/Container";

const App = () => {
  const [check, setCheck] = useState(true);
  window.onload = () => setCheck(false);
  return (
    <>
      {check ? (
        <h1 className="loading">Loading...</h1>
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
