import React, { useEffect, useRef } from 'react';

import useVideoPlayer from '../../hooks/useVideoPlayer';
import './VideoPlayerControls.css';

const VideoPlayerControls = ({videoElement, progress}) => {
  const {
    playerState,
    togglePlay,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);

  const progressBarElement = useRef(null)
  useEffect(() => {
    if (progress > 99) {
      togglePlay();
    }
  }, [progress])

  return (
    <div className="controls">
      <div
        className="progress-bar"
        onClick={(e) => handleVideoProgress(e, progressBarElement)}
        ref={progressBarElement}
      >
        <div
          className="progress-bar__filled"
          style={{width: progress + '%'}}
        ></div>
      </div>
      <div className="actions">
        <button onClick={togglePlay}>
          {!playerState.isPlaying ? (
            <i className="bx bx-play"></i>
          ) : (
            <i className="bx bx-pause"></i>
          )}
        </button>
        <select
          className="velocity"
          value={playerState.speed}
          onChange={(e) => handleVideoSpeed(e)}
        >
          <option value="0.50">0.50x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
        <button className="mute-btn" onClick={toggleMute}>
          {!playerState.isMuted ? (
            <i className="bx bxs-volume-full"></i>
          ) : (
            <i className="bx bxs-volume-mute"></i>
          )}
        </button>
      </div>
    </div>
  )
}

export default VideoPlayerControls;
