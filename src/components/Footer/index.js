import Controls from "../Controls";
import "./style.css";
import ProgressBar from "../ProgressBar";

const Footer = ({
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
    <div className="container-footer">
      <div className="title-current-music">
        <h1>{currentMusic.title}</h1>
        <h3>{currentMusic.artist}</h3>
      </div>
      <div className="container-controls-progress-bar">
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentMusic={currentMusic}
          setCurrentMusic={setCurrentMusic}
          musicRef={musicRef}
          handlePlayStop={handlePlayStop}
          handlePreviousMusic={handlePreviousMusic}
          handlePausePlay={handlePausePlay}
          handleNextMusic={handleNextMusic}
        />
        <ProgressBar />
      </div>
    </div>
  );
};

export default Footer;
