import React from 'react'
import HotSpotCard from '../HotspotCard/HotSpotCard';
import HotspotMarker from '../HotspotMarker/HotspotMarker';

const Hotspot = ({time, text, videoElement}) => {
  if (time < 0 || time > videoElement.current.duration) return null;

  return (
    <div className="hotspot">
      <HotspotMarker
        time={time}
        videoElement={videoElement}
      />
      <HotSpotCard
        time={time}
        text={text}
        videoDuration={videoElement.current.duration}
        videoSrc={videoElement.current.src}
      />
    </div>
  )
}

export default Hotspot;
