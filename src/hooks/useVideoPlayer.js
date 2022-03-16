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
  
  return {
    playerState,
    togglePlay
  };
};

export default useVideoPlayer;
