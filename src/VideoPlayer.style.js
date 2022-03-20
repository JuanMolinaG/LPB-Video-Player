import styled from 'styled-components';

import {Controls} from './components/VideoPlayerControls/VideoPlayerControls.styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;

  &:hover ${Controls} {
    opacity: 1;
  }
`;

export const TransitionOverlay = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Video = styled.video`
  width: 100%;
`;
