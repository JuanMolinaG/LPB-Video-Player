import {useState, useEffect} from 'react'

const useVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  useEffect(() => {
    playerState.isPlaying
     ? videoElement.current.play()
     : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  const handleOnTimeUpdate = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;

    if (progress === 100) {
      setPlayerState({
        ...playerState,
        isPlaying: false,
        progress: 0,
      });
    } else {
      setPlayerState({
        ...playerState,
        progress,
      });
    }
  };

  const handleVideoProgress = (event, progressBarElement) => {
    const progressTime = (event.nativeEvent.offsetX / progressBarElement.current.offsetWidth) * videoElement.current.duration;
    videoElement.current.currentTime = progressTime;
  };

  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    const isMuted = !playerState.isMuted;
    videoElement.current.muted = isMuted;
    setPlayerState({
      ...playerState,
      isMuted: isMuted,
    });
  };
  
  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  };
};

export default useVideoPlayer;
