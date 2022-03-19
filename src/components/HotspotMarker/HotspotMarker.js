import React from 'react';

import './HotspotMarker.css';

const HotspotMarker = ({hotspotId, time, videoElement, canvasElement}) => {
  const leftPosition = Math.round((time / videoElement.current.duration) * 100);

  const handleClick = () => {
    const canvas = canvasElement.current;
    const video = videoElement.current;
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.animationName = 'fade';
    canvas.style.animationTimingFunction = 'ease-in-out';
    canvas.style.animationDuration = '1s';
    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.removeAttribute("style");
    }, 900);
    video.currentTime = time;

    window.location.hash = `hotspot-${hotspotId}`;
  }

  return (
    <div
      className="hotspot-marker"
      style={{left: leftPosition + '%' }}
      onClick={handleClick}
    ></div>
  )
}

export default HotspotMarker;
