import "./style.css";
import StopImage from "../../assets/stop.svg";
import PlayImage from "../../assets/play.svg";
import PauseImage from "../../assets/pause.svg";
import PreviousImage from "../../assets/previous.svg";
import NextImage from "../../assets/next.svg";
import { useState } from "react";

const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="container-controls">
      <div className="container-buttons">
        <img
          src={isPlaying ? PlayImage : StopImage}
          alt="Stop"
          onClick={() => handlePlay()}
        />
        <img src={PreviousImage} alt="Previous" />
        <img src={PauseImage} alt="Pause" />
        <img src={NextImage} alt="Next" />
      </div>
      <div className="container-progress">
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default Controls;
