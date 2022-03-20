import React from 'react';

import * as S from './HotspotMarker.styled';

interface IHotspotMarkerProps {
  hotspotId: number,
  time: number,
  videoElement: React.RefObject<HTMLVideoElement>,
  canvasElement: React.RefObject<HTMLCanvasElement>
}

const HotspotMarker = ({hotspotId, time, videoElement, canvasElement}: IHotspotMarkerProps) => {
  const leftPosition: number = Math.round((time / videoElement.current!.duration) * 100);

  const handleClick = () => {
    const canvas: HTMLCanvasElement = canvasElement.current!;
    const video: HTMLVideoElement = videoElement.current!;
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
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
    <S.MarkerPoint
      style={{left: leftPosition + '%' }}
      onClick={handleClick}
    ></S.MarkerPoint>
  )
}

export default HotspotMarker;
