import React, {useEffect, useState} from 'react';

interface IVideoWrapper extends HTMLDivElement {
  webkitRequestFullscreen?: () => void;
  fullscreenElement?: boolean,
}

interface Document {
  webkitFullscreenElement?: boolean,
  webkitExitFullscreen?: () => void,
}

const useVideoPlayerControls = (videoElement: any, videoWrapperEl: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const video: HTMLVideoElement = videoElement.current;

  useEffect(() => {
    const handleTimeElapsed = ():void => {
      let currentMinutes: string | number = Math.floor(video.currentTime / 60);
      let currentSeconds: string | number = Math.floor(video.currentTime - currentMinutes * 60);
      currentMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
      currentSeconds = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;
      setTimeElapsed(`${currentMinutes}:${currentSeconds}`);
    }
  
    const handleVideoDuration = ():void => {
      let durationMinutes: string | number = Math.floor(video.duration / 60);
      let durationSeconds: string | number = Math.floor(video.duration - durationMinutes * 60);
      durationMinutes = durationMinutes < 10 ? '0' + durationMinutes : durationMinutes;
      durationSeconds = durationSeconds < 10 ? '0' + durationSeconds : durationSeconds;
      setDuration(`${durationMinutes}:${durationSeconds}`);
    }

    handleTimeElapsed();
    handleVideoDuration();
  }, [video.currentTime, video.duration]);


  const togglePlay = ():void => {
    !isPlaying
     ? video.play()
     : video.pause();
    setIsPlaying(!isPlaying);
  };

  const handleVideoProgress = (event: React.MouseEvent<HTMLElement>, progressBarElement: any) => {
    const progressTime: number = (event.nativeEvent.offsetX / progressBarElement.current.offsetWidth) * video.duration;
    video.currentTime = progressTime;
  };

  const handleVideoSpeed = (event: React.ChangeEvent) => {
    const speed: number = Number((event.target as HTMLSelectElement).value);
    video.playbackRate = speed;
    setSpeed(speed);
  };

  const toggleMute = () => {
    const videoIsMuted: boolean = !isMuted;
    video.muted = videoIsMuted;
    setIsMuted(videoIsMuted);
  };

  const toggleFullscreen = () => {
    const videoWrapper: IVideoWrapper = videoWrapperEl.current;

    if (!isFullscreen) {
      if (videoWrapper.webkitRequestFullscreen) {
        // Need this to support Safari
        videoWrapper.webkitRequestFullscreen();
      } else {
        videoWrapper.requestFullscreen();
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if ((document as Document).webkitFullscreenElement) {
        // Need this to support Safari
        (document as Document).webkitExitFullscreen?.();
      }
    }
    
    setIsFullscreen(!isFullscreen);
  }

  const togglePiP = async () => {
    try {
      if (video !== document.pictureInPictureElement) {
        await video.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  return {
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
  };
};

export default useVideoPlayerControls;
