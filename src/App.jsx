import { useState } from "react";
import "./App.css";
import { Audios, Hero, Navbar, Footer, Video } from "./components/Container";
import { DotLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true);
  window.onload = () => setLoading(false);
  return (
    <>
      {loading ? (
        <div className="loader">
          <DotLoader speedMultiplier={2} size={150} color="#ded5c6" />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Audios />
          <Video />
          <Footer />
        </>
      )}
    </>
  );
};
export default App;
