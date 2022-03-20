import React, { useEffect, useRef } from 'react';

import useVideoPlayerControls from '../../hooks/useVideoPlayerControls';
import * as S from './VideoPlayerControls.styled';

interface IVideoPlayerControlsProps {
  videoElement: React.RefObject<HTMLVideoElement>,
  progress: number,
  videoWrapperEl: React.RefObject<HTMLDivElement>
}

const VideoPlayerControls = ({videoElement, progress, videoWrapperEl}: IVideoPlayerControlsProps) => {
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

  const progressBarElement = useRef<HTMLDivElement>(null);

  return (
    <S.Controls>
      <S.ProgressBar
        onClick={(e) => handleVideoProgress(e, progressBarElement)}
        ref={progressBarElement}
      >
        <S.ProgressBarFilled style={{width: progress + '%'}}></S.ProgressBarFilled>
      </S.ProgressBar>
      <S.Actions>
        <S.Button onClick={togglePlay}>
          {(!isPlaying) ? (
            <S.Icon className="bx bx-play"></S.Icon>
          ) : (
            <S.Icon className="bx bx-pause"></S.Icon>
          )}
        </S.Button>
        <S.Button onClick={toggleMute}>
          {!isMuted ? (
            <S.IconSmall className="bx bx-volume-full"></S.IconSmall>
          ) : (
            <S.IconSmall className="bx bx-volume-mute"></S.IconSmall>
          )}
        </S.Button>
        <S.Time>
          <time className="time-elapsed">{timeElapsed}</time>
          <span> / </span>
          <time className="duration">{duration}</time>
        </S.Time>
      </S.Actions>
      <S.View>
        <S.VelocitySelect
          className="velocity"
          value={speed}
          onChange={(e: React.ChangeEvent) => handleVideoSpeed(e)}
        >
          <option value="0.50">0.50x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </S.VelocitySelect>
        {('pictureInPictureEnabled' in document) && (
          <S.Button
            onClick={togglePiP}
          >
            <S.IconSmall className='bx bx-windows bx-flip-horizontal' ></S.IconSmall>
          </S.Button>
        )}
        <S.Button
          onClick={toggleFullscreen}
        >
          {(!isFullscreen) ? (
            <S.IconSmall className='bx bx-fullscreen'></S.IconSmall>
          ) : (
            <S.IconSmall className='bx bx-exit-fullscreen' ></S.IconSmall>
          )}
        </S.Button>
      </S.View>
    </S.Controls>
  )
}

export default VideoPlayerControls;
