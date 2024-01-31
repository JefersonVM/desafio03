import Controls from "../Controls";
import "./style.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="title-current-music">
        <h1>Violão acústico</h1>
        <h3>Robert Mayer</h3>
      </div>
      <Controls />
    </div>
  );
};

export default Footer;
