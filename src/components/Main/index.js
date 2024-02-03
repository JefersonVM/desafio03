import CardMusic from "../CardMusic";
import "./style.css";

const Main = ({
  music,
  setMusic,
  isPlaying,
  setIsPlaying,
  currentMusic,
  setCurrentMusic,
  musicRef,
  handlePlayStop
}) => {
  return (
    <div className="container-main">
      <h1>The best play list</h1>

      <div className="container-cards ">
        {music.map((music) => (
          <CardMusic
            key={music.id}
            music={music}
            setMusic={setMusic}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentMusic={currentMusic}
            setCurrentMusic={setCurrentMusic}
            musicRef={musicRef}
            handlePlayStop={handlePlayStop}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
