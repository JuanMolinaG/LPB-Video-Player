import {useState} from 'react'

const useVideoPlayerControls = (videoElement) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    !isPlaying
     ? videoElement.current.play()
     : videoElement.current.pause();
    setIsPlaying(!isPlaying);
  };

  const handleVideoProgress = (event, progressBarElement) => {
    const progressTime = (event.nativeEvent.offsetX / progressBarElement.current.offsetWidth) * videoElement.current.duration;
    videoElement.current.currentTime = progressTime;
  };

  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setSpeed(speed);
  };

  const toggleMute = () => {
    const videoIsMuted = !isMuted;
    videoElement.current.muted = videoIsMuted;
    setIsMuted(isMuted);
  };
  
  return {
    isPlaying,
    setIsPlaying,
    speed,
    isMuted,
    togglePlay,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  };
};

export default useVideoPlayerControls;
