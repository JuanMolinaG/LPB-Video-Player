import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import VideoPlayerControls from './components/VideoPlayerControls/VideoPlayerControls'
import Hotspot from './components/Hotspot/Hotspot'

import useVideoPlayer from './hooks/useVideoPlayer';

import video from "./assets/video.mp4";
import hotspotsList from './assets/hotspotsList';

const App = () => {
  const [hotspots, setHotspots] = useState();
  const [duration, setDuration] = useState(0);

  const videoElement = useRef(null);
  const { playerState, handleOnTimeUpdate } = useVideoPlayer(videoElement);

  useEffect(() => {
    if (duration !== 0) {
      setHotspots(hotspotsList);
    }
  }, [duration]);

  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
          onLoadedMetadata={(e) => setDuration(e.target.duration)}
        />
        <VideoPlayerControls videoElement={videoElement} progress={playerState.progress}/>
        {hotspots && (
          hotspots.map((hotspot) => (
            <Hotspot
              key={hotspot.id}
              time={hotspot.time}
              text={hotspot.text}
              videoElement={videoElement}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
