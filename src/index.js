import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer';
import GlobalStyles from './utils/styled/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <VideoPlayer />
  </React.StrictMode>,
  document.getElementById('root')
);
