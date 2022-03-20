import React, { useEffect, useState } from 'react';

import * as S from './HotspotCard.style';

interface IHotSpotCardProps {
  time: number,
  text: string,
  videoDuration: number,
  videoSrc: string
}

const HotSpotCard = ({time, text, videoDuration, videoSrc}: IHotSpotCardProps) => {
  const [imgSrc, setImgSrc] = useState('');

  const leftPosition: number = Math.round((time /videoDuration) * 100);

  useEffect(() => {
    const video: HTMLVideoElement = document.createElement('video');
    video.setAttribute('src', videoSrc);
    video.onloadedmetadata = () => {
      video.currentTime = time;
    };
    video.onseeked = (): void => {
      const canvas: HTMLCanvasElement = document.createElement('canvas');
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      setImgSrc(canvas.toDataURL());
      video.remove();
      canvas.remove();
    }
  }, [time, videoSrc]);

  return (
    <S.CardContainer
      variant={leftPosition < 66 ? 'left' : 'right'}
      style={leftPosition < 66 ? {left: `calc(${leftPosition}% - 10px)` } : {right: `calc(${100 - leftPosition}% - 10px)` }}
    >
      <S.CardThumbnail src={imgSrc} alt="Hotspot thumbnail" />
      <S.CardText variant={leftPosition < 66 ? 'left' : 'right'}>{text}</S.CardText>
    </S.CardContainer>
  )
}

export default HotSpotCard;
