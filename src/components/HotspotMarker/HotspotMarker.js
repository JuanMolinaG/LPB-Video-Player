import React from 'react';

import './HotspotMarker.css';

const HotspotMarker = ({time, videoElement}) => {
  const leftPosition = Math.round((time / videoElement.current.duration) * 100);

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