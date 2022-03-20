import React, {useEffect, useRef, useState} from 'react';
import VideoPlayerControls from './components/VideoPlayerControls/VideoPlayerControls';
import Hotspot from './components/Hotspot/Hotspot';

import useProgressBar from './hooks/useProgressBar';
import * as S from './VideoPlayer.style';

import video from "./assets/video.mp4";
import hotspotsList, {IHotspotItem} from './assets/hotspotsList';


const VideoPlayer = () => {
  const [videoIsLoaded, setVideoIsLoaded] = useState(false);
  const [hotspots, setHotspots] = useState<IHotspotItem[]>([]);

  const videoElement = useRef<HTMLVideoElement>(null);
  const canvasElement = useRef<HTMLCanvasElement>(null);
  const videoWrapperEl = useRef<HTMLDivElement>(null);

  const {
    progress,
    handleOnTimeUpdate,
  } = useProgressBar();

  useEffect(() => {
    if (videoIsLoaded) {
      setHotspots(hotspotsList);
    }
  }, [videoIsLoaded]);

  return (
    <S.Container>
      <S.VideoWrapper ref={videoWrapperEl}>
        <S.TransitionOverlay ref={canvasElement}></S.TransitionOverlay>
        <S.Video
          src={video}
          ref={videoElement}
          onTimeUpdate={(e) => handleOnTimeUpdate((e.target as HTMLVideoElement))}
          onLoadedMetadata={() => setVideoIsLoaded(true)}
        />
        {videoIsLoaded && (
          <VideoPlayerControls
            videoElement={videoElement}
            progress={progress}
            videoWrapperEl={videoWrapperEl}
          />
        )}
        {hotspots && (
          hotspots.map((hotspot) => (
            <Hotspot
              key={hotspot.id}
              id={hotspot.id}
              time={hotspot.time}
              text={hotspot.text}
              videoElement={videoElement}
              canvasElement={canvasElement}
            />
          ))
        )}
      </S.VideoWrapper>
    </S.Container>
  );
}

export default VideoPlayer;
