import React, {useRef} from 'react';

import useVideoPlayer from '../hooks/useVideoPlayer';

const VideoPlayerControls = ({videoElement, progress}) => {
  const {
    playerState,
    togglePlay,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);

  return (
    <div className="controls">
      <div className="actions">
        <button onClick={togglePlay}>
          {!playerState.isPlaying ? (
            <i className="bx bx-play"></i>
          ) : (
            <i className="bx bx-pause"></i>
          )}
        </button>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => handleVideoProgress(e)}
      />
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
  )
}

export default VideoPlayerControls