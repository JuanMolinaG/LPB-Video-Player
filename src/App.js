import React, {useRef} from 'react';
import './App.css';
import VideoPlayerControls from './components/VideoPlayerControls'

import video from "./assets/video.mp4";
import useVideoPlayer from './hooks/useVideoPlayer';

const App = () => {
  const videoElement = useRef(null);
  const { playerState, handleOnTimeUpdate } = useVideoPlayer(videoElement);

  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <VideoPlayerControls videoElement={videoElement} progress={playerState.progress}/>
      </div>
    </div>
  );
}

export default App;
