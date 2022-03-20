import {useState} from 'react';

const useProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleOnTimeUpdate = (video: HTMLVideoElement): void => {
    const updateTime = (): void => {
      const progress: number = (video.currentTime / video.duration) * 100;

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
