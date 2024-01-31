import './style.css';
import StopImage from '../../assets/stop.svg';
import PlayImage from '../../assets/play.svg';
import PauseImage from '../../assets/pause.svg';
import PreviousImage from '../../assets/previous.svg';
import NextImage from '../../assets/next.svg';

const Controls = () => {
    return (
        <div className="container-controls">
            <img src={StopImage} alt="Stop" />
            <img src={PreviousImage} alt="Previous" />
            <img src={PlayImage} alt="Play" />
            <img src={PauseImage} alt="Pause" />
            <img src={NextImage} alt="Next" />
        </div>
    );
}

export default Controls;