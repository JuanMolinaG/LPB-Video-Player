import {useState} from 'react'

const useProgressBar = () => {
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
    progress,
    handleOnTimeUpdate,
  };
};

export default useProgressBar;
