import "./style.css";

const CardMusic = ({
  musics,
  music,
  setMusic,
  isPlaying,
  setIsPlaying,
  currentMusic,
  setCurrentMusic,
  musicRef,
  handlePlayStop,
}) => {
  return (
    <div className="container-card-music" >
      <img src={music.cover} alt="Imagem Cover" onClick={() => handlePlayStop()} />
      <h2>{music.title}</h2>
      <p>{music.description}</p>
    </div>
  );
};

export default CardMusic;
