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

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };
  
  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
  };
};

export default useVideoPlayer;
