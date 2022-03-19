import React, {useEffect, useRef, useState} from 'react';
import './VideoPlayer.css';
import VideoPlayerControls from './components/VideoPlayerControls/VideoPlayerControls'
import Hotspot from './components/Hotspot/Hotspot'

import useProgressBar from './hooks/useProgressBar'

import video from "./assets/video.mp4";
import hotspotsList from './assets/hotspotsList';

const VideoPlayer = () => {
  const [videoIsloaded, setVideoIsLoaded] = useState(false);
  const [hotspots, setHotspots] = useState();

  const videoElement = useRef(null);
  const canvasElement = useRef(null);

  const {
    progress,
    handleOnTimeUpdate,
  } = useProgressBar();

  useEffect(() => {
    if (videoIsloaded) {
      setHotspots(hotspotsList);
    }
  }, [videoIsloaded]);

  return (
    <div className="container">
      <div className="video-wrapper">
        <canvas
          className="transition-overlay"
          ref={canvasElement}
        ></canvas>
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={(e) => handleOnTimeUpdate(e.target)}
          onLoadedMetadata={() => setVideoIsLoaded(true)}
        />
        {videoIsloaded && ( <VideoPlayerControls videoElement={videoElement} progress={progress}/> )}
        {hotspots && (
          hotspots.map((hotspot) => (
            <Hotspot
              key={hotspot.id}
              id={hotspot.id}
              time={hotspot.time}
              text={hotspot.text}
              videoElement={videoElement}
              canvasElement={canvasElement}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
