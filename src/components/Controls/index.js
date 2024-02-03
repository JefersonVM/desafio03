import NextImage from "../../assets/next.svg";
import PauseImage from "../../assets/pause.svg";
import PlayImage from "../../assets/play.svg";
import PreviousImage from "../../assets/previous.svg";
import StopImage from "../../assets/stop.svg";
import "./style.css";

const Controls = ({
  isPlaying,
  setIsPlaying,
  currentMusic,
  setCurrentMusic,
  musicRef,
  handlePlayStop,
  handlePreviousMusic,
  handlePausePlay,
  handleNextMusic,
}) => {
  return (
    <div className="container-controls">
      <div className="container-buttons">
        <img
          className="stop-play"
          src={isPlaying ? PlayImage : StopImage}
          alt="Stop"
          onClick={() => handlePlayStop()}
        />
        <img
          src={PreviousImage}
          alt="Previous"
          onClick={() => handlePreviousMusic()}
        />
        <img
          className="pause-play"
          src={PauseImage}
          alt="Pause"
          onClick={() => handlePausePlay()}
        />
        <img
          src={NextImage}
          alt="Next"
          onClick={() => {
            handleNextMusic();
          }}
        />
      </div>
      <div className="container-progress">
        <span></span>
        <audio src={currentMusic.url} ref={musicRef} autoPlay></audio>
      </div>
    </div>
  );
};

export default Controls;
