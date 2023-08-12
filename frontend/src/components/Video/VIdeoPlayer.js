import React from 'react';
import YouTube from 'react-youtube';
import styles from './JustVideo.module.css'

const VIdeoPlayer = (props) => {
  const videoUrl = props.videoUrl;

  const extractVideoIdFromUrl = (url) => {
    const videoIdMatch = url.match(/(?:\?v=|\/embed\/|\/watch\?v=|\/\d{1,12}$|\/\d{1,12}\?)/);
    if (videoIdMatch && videoIdMatch.length > 0) {
      return videoIdMatch[0].replace(/(\?v=|\/embed\/|\/watch\?v=|\/|^\s+|\s+$|\?$)/g, '');
    }
    return null;
  };

  const videoId = extractVideoIdFromUrl(videoUrl);

  const opts = {
    height: '370',
    width: '900',
    playerVars: {
      autoplay: 1, 
    },
  };

  return (
    <div className={styles.videoContainer}>
        <YouTube videoId={videoId} opts={opts} />
    </div>

  );
}

export default VIdeoPlayer;