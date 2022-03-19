import {useEffect, useState} from 'react'

const useVideoPlayerControls = (videoElement) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const video = videoElement.current;

  useEffect(() => {
    const handleTimeElapsed = () => {
      let currentMinutes = Math.floor(video.currentTime / 60);
      currentMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
      let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
      currentSeconds = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;
      setTimeElapsed(`${currentMinutes}:${currentSeconds}`);
    }
  
    const handleVideoDuration = () => {
      let durationMinutes = Math.floor(video.duration / 60);
      durationMinutes = durationMinutes < 10 ? '0' + durationMinutes : durationMinutes;
      let durationSeconds = Math.floor(video.duration - durationMinutes * 60);
      durationSeconds = durationSeconds < 10 ? '0' + durationSeconds : durationSeconds;
      setDuration(`${durationMinutes}:${durationSeconds}`);
    }

    handleTimeElapsed();
    handleVideoDuration();
  }, [video.currentTime, video.duration]);


  const togglePlay = () => {
    !isPlaying
     ? video.play()
     : video.pause();
    setIsPlaying(!isPlaying);
  };

  const handleVideoProgress = (event, progressBarElement) => {
    const progressTime = (event.nativeEvent.offsetX / progressBarElement.current.offsetWidth) * video.duration;
    video.currentTime = progressTime;
  };

  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value);
    video.playbackRate = speed;
    setSpeed(speed);
  };

  const toggleMute = () => {
    const videoIsMuted = !isMuted;
    video.muted = videoIsMuted;
    setIsMuted(videoIsMuted);
  };

  const toggleFullscreen = () => {
    const videoWrapper = document.querySelector('.video-wrapper');

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
      } else if (document.webkitFullscreenElement) {
        // Need this to support Safari
        document.webkitExitFullscreen();
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
