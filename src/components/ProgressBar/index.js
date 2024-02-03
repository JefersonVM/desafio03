import './style.css';

const ProgressBar = ({ musicRef, isPlaying, setIsPlaying }) => {

    return (
        <div className="container-progress-bar">
            <input
                type="range"
                min={0}
                max={100}
                value={0}
                onChange={(e) => musicRef.current.currentTime = e.target.value}
            />
        </div>
    );

};
   
    

export default ProgressBar;