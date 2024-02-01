import "./style.css";

const CardMusic = ({ musics, music, setMusic }) => {
  return (
    <div className="container-card-music">
      <img src={music.cover} alt="Imagem Cover" />
      <h2>{music.title}</h2>
      <p>{music.description}</p>
    </div>
  );
};

export default CardMusic;
