import { useRef, useState } from "react";
import { musics } from "../src/musics";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [music, setMusic] = useState([...musics]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentMusic, setCurrentMusic] = useState(musics[0]);
  const musicRef = useRef();
  

  const handlePlayStop = () => {
    const prevPlaying = isPlaying;
    setIsPlaying(!prevPlaying);

    if (prevPlaying) {
      musicRef.current.play();
    } else {
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
    }
  };

  const handlePreviousMusic = () => {
    const prevPlaying = isPlaying;
    setIsPlaying(prevPlaying);
    const currentIndex = musics.indexOf(currentMusic);
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = musics.length - 1;
    }
    setCurrentMusic(musics[newIndex]);
  };

  const handlePausePlay = () => {
    const prevPlaying = isPlaying;
    setIsPlaying(!prevPlaying);

    if (prevPlaying) {
      musicRef.current.play();
    } else {
      musicRef.current.pause();
    }
  };

  const handleNextMusic = () => {
    const prevPlaying = isPlaying;
    setIsPlaying(prevPlaying);
    const currentIndex = musics.indexOf(currentMusic);
    let newIndex = currentIndex + 1;
    if (newIndex >= musics.length) {
      newIndex = 0;
    }
    setCurrentMusic(musics[newIndex]);
  };
  return (
    <div className="container">
      <Header />
      <Main music={music} setMusic={setMusic} handlePlayStop={handlePlayStop} />
      <Footer
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
    </div>
  );
}

export default App;
