import {useState} from 'react'

const useProgressBar = () => {
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleOnTimeUpdate = (video) => {
    const updateTime = () => {
      const progress = (video.currentTime / video.duration) * 100;

      if (video.ended) {
        setProgress(Math.round(progress));
      } else {
        setProgress(progress);
      }
      window.requestAnimationFrame(updateTime);
    }
    window.requestAnimationFrame(updateTime);
  };

  return {
    duration,
    setDuration,
    progress,
    handleOnTimeUpdate,
  };
};

export default useProgressBar;
