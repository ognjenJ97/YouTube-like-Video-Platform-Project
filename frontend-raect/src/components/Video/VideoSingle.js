import React, { memo } from 'react';
import styles from './VideoSingle.module.css';
import MoreVideos from './MoreVideos';
import VIdeoPart from './VIdeoPart';

const VideoSingle = () => {

  return (
    <div>

      <div>
        <VIdeoPart />
      </div>
      
      <div className={styles.moreVideos}>
        <MoreVideos />
      </div>

    </div>
  );
};

export default memo(VideoSingle);