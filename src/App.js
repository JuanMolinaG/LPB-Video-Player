import './App.css';

import video from "./assets/video.mp4";

function App() {
  return (
    <div className="container">
      <div className="video-wrapper">
        <video src={video}/>
        <div className="controls">
          <div className="actions">
            <button>
              <i className="bx bx-play"></i>
            </button>
          </div>
          <input type="range" min="0" max="100"/>
          <select className="velocity">
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn">
            <i className="bx bx-volume-full"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
