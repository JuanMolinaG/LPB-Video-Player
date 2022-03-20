import styled, { keyframes } from 'styled-components';

import {CardContainer} from '../HotspotCard/HotspotCard.style';

export const MarkerPoint = styled.div`
  box-sizing: border-box;
  width: 13px;
  height: 13px;
  background: white;
  border: 4px solid red;
  border-radius: 50%;
  position: absolute;
  bottom: 28px;
  cursor: pointer;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover ~ ${CardContainer} {
    opacity: 1;
  }
`;

export const fade = keyframes`
  0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;
