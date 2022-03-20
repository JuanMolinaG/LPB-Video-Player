import React, { useEffect, useState } from 'react';

import * as S from './HotspotCard.style';

const HotSpotCard = ({time, text, videoDuration, videoSrc}) => {
  const [imgSrc, setImgSrc] = useState('');

  const leftPosition = Math.round((time /videoDuration) * 100);

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
