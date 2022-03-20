import React from 'react';
import HotSpotCard from '../HotspotCard/HotSpotCard';
import HotspotMarker from '../HotspotMarker/HotspotMarker';

interface IHotspotProps {
  id: number,
  time: number,
  text: string,
  videoElement: React.RefObject<HTMLVideoElement>,
  canvasElement: React.RefObject<HTMLCanvasElement>
}

const Hotspot = ({id, time, text, videoElement, canvasElement}: IHotspotProps) => {
  if (time < 0 || time > videoElement.current!.duration) return null;

  return (
    <div className="hotspot">
      <HotspotMarker
        hotspotId={id}
        time={time}
        videoElement={videoElement}
        canvasElement={canvasElement}
      />
      <HotSpotCard
        time={time}
        text={text}
        videoDuration={videoElement.current!.duration}
        videoSrc={videoElement.current!.src}
      />
    </div>
  )
}

export default Hotspot;
