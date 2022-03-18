import React, { useEffect, useState } from 'react';

import './HotspotCard.css';

const HotSpotCard = ({time, text, videoDuration, videoSrc}) => {
  const [imgSrc, setImgSrc] = useState('');

  const leftPosition = (time /videoDuration) * 100;

  useEffect(() => {
    const video = document.createElement('video');
    video.setAttribute('src', videoSrc);
    video.onloadedmetadata = () => {
      video.currentTime = time;
    };
    video.onseeked = () => {
      const canvas = document.createElement('canvas');
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      setImgSrc(canvas.toDataURL());
      video.remove();
      canvas.remove();
    }
  }, [time, videoSrc]);

  return (
    <div
      className={leftPosition < 66 ? 'hotspot-card left' : 'hotspot-card right'}
      style={leftPosition < 66 ? {left: leftPosition + '%' } : {right: 100 - leftPosition + '%' }}
    >
      <img className="hotspot-card__thumbnail" src={imgSrc} alt="Hotspot thumbnail" />
      <p>{text}</p>
    </div>
  )
}

export default HotSpotCard