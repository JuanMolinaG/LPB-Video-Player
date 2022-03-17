import React from 'react';

import './HotspotMarker.css';

const HotspotMarker = ({time, videoElement}) => {
  const videoDuration = videoElement.current.duration
  let leftPosition;

  if (time <= videoDuration) {
    leftPosition = (time / videoDuration) * 100;
  } else {
    leftPosition = '100';
  }

  const handleClick = () => {
    videoElement.current.currentTime = time;
  }

  return (
    <div
      className="hotspot-marker"
      style={{left: leftPosition + '%' }}
      onClick={handleClick}
    ></div>
  )
}

export default HotspotMarker