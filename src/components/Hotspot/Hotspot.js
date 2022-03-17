import React from 'react'
import HotspotMarker from '../HotspotMarker/HotspotMarker';

const Hotspot = ({time, text, videoElement}) => {
  return (
    <>
      <HotspotMarker time={time}  videoElement={videoElement}/>
    </>
  )
}

export default Hotspot;
