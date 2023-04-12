import React, { useState } from "react";

const Test = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = (componentIndex) => {
    setIsPlaying(componentIndex);
  };
  return (
    <div>
      <ChildComponent
        isPlaying={isPlaying === 0}
        onButtonClick={() => handleButtonClick(0)}
      />
      <ChildComponent
        isPlaying={isPlaying === 1}
        onButtonClick={() => handleButtonClick(1)}
      />
      <ChildComponent
        isPlaying={isPlaying === 2}
        onButtonClick={() => handleButtonClick(2)}
      />
      {/* Add more ChildComponent instances as needed */}
    </div>
  );
};

function ChildComponent({ isPlaying, onButtonClick }) {
  return (
    <div>
      <button onClick={onButtonClick}>{isPlaying ? "Stop" : "Play"}</button>
    </div>
  );
}

export default Test;
