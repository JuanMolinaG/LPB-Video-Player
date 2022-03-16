import './App.css';

import video from "./assets/video.mp4";

function App() {
  return (
    <div className="container">
      <div className="video-wrapper">
        <video src={video}/>
      </div>
    </div>
  );
}

export default App;
