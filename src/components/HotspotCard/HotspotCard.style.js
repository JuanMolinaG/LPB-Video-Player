import styled from 'styled-components';

export const CardContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  bottom: 55px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: ${props => props.variant === 'left' ? '10px 10px 10px 0' : '10px 10px 0 10px'};
  max-width: 33%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    bottom: -11px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: rgba(255,255,255,0.4) transparent transparent transparent;
    ${props => props.variant}: -1px;
  }
`;

export const CardThumbnail = styled.img`
  max-width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const CardText = styled.p`
  padding: 10px;
  margin: 0;
  background: rgba(255,255,255,0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
  border-radius: ${props => props.variant === 'left' ? '0 0 10px 0' : '0 0 0 10px'};

  @media (max-width: 640px) {
    overflow: hidden;
    max-height: 80px;
    font-size: 12px;
    line-height: 14px;
  }
`;
