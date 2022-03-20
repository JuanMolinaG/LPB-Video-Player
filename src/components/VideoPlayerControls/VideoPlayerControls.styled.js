import styled from 'styled-components';

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

export const ProgressBar = styled.div`
  display: flex;
  width: 100%;
  height: 5px;
  background: rgba(0,0,0,0.6);
  cursor: pointer;
`;

export const ProgressBarFilled = styled.div`
  background: red;
  width: 0;
`;

export const Actions = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Icon = styled.i`
  color: white;
  font-size: 30px;
`;

export const IconSmall = styled(Icon)`
  font-size: 20px;
`;

export const Time = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  font-size: 14px;
`;

export const View = styled.div`
  display: flex;
`;

export const VelocitySelect = styled.select`
  font-family: 'Montserrat', sans-serif;
  appearance: none;
  background: none;
  color: white;
  outline: none;
  border: none;
  text-align: center;
  font-size: 14px;
  width: 50px;
  cursor: pointer;
`;
