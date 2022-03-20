import { useEffect, useRef } from 'react';

import useVideoPlayerControls from '../../hooks/useVideoPlayerControls';
import './VideoPlayerControls.css';

const VideoPlayerControls = ({videoElement, progress, videoWrapperEl}) => {
  const {
    isPlaying,
    setIsPlaying,
    speed,
    isMuted,
    togglePlay,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    timeElapsed,
    duration,
    isFullscreen,
    toggleFullscreen,
    togglePiP
  } = useVideoPlayerControls(videoElement, videoWrapperEl);

  useEffect(() => {
    if (progress >= 100) setIsPlaying(false);
  },[progress, setIsPlaying]);

  const progressBarElement = useRef(null)

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
          {(!isPlaying) ? (
            <i className="bx bx-play"></i>
          ) : (
            <i className="bx bx-pause"></i>
          )}
        </button>
        <button className="mute-btn" onClick={toggleMute}>
          {!isMuted ? (
            <i className="bx bx-volume-full"></i>
          ) : (
            <i className="bx bx-volume-mute"></i>
          )}
        </button>
        <div className="time">
          <time className="time-elapsed">{timeElapsed}</time>
          <span> / </span>
          <time className="duration">{duration}</time>
        </div>
      </div>
      <div className="view">
        <select
          className="velocity"
          value={speed}
          onChange={(e) => handleVideoSpeed(e)}
        >
          <option value="0.50">0.50x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
        {('pictureInPictureEnabled' in document) && (
          <button
            className="fullscreen-btn"
            onClick={togglePiP}
          >
            <i className='bx bx-windows bx-flip-horizontal' ></i>
          </button>
        )}
        <button
          className="fullscreen-btn"
          onClick={toggleFullscreen}
        >
          {(!isFullscreen) ? (
            <i className='bx bx-fullscreen'></i>
          ) : (
            <i className='bx bx-exit-fullscreen' ></i>
          )}
        </button>
      </div>
    </div>
  )
}

export default VideoPlayerControls;
