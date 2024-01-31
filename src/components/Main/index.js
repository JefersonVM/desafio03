import CardMusic from "../CardMusic";
import "./style.css";
import { musics } from "../../musics";
import { useState } from "react";

const Main = () => {
  const [music, setMusic] = useState([...musics]);
  return (
    <div className="container-main">
      <h1>The best play list</h1>

      <div className="container-cards ">
        {music.map((music) => (
          <CardMusic key={music.id} music={music} setMusic={setMusic} />
        ))}
      </div>
    </div>
  );
};

export default Main;
