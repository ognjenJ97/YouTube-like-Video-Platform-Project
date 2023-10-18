import React from 'react';
import styles from './VideoSingle.module.css';
import { useNavigate } from 'react-router-dom';

const MoreVideosSingle = (props) => {

    var navigate = useNavigate()

    const formattedViews = props.video.views.toLocaleString();

    const goToPlay = (id) => {
      navigate('/play/' + id);
  }

  const goToChannel = (id) => {
    navigate('/channel/' + id);
}

  return (
    <div className={styles.moreVideosSingle}>
        <div className={styles.thumbnail} onClick={() => {goToPlay(props.video.id)}}>
            <img src={props.video.thumbnailUrl} alt="Thumbnail" />
        </div>
        <div className={styles.info}>
            <p className={styles.title} onClick={() => {goToPlay(props.video.id)}}>{props.video.title}</p>
            <p className={styles.channel} onClick={() => {goToChannel(props.video.ownerId)}}>{props.video.ownerUsername}</p>
            <p className={styles.views}>{formattedViews}</p>
        </div>
    </div>
  )
}

export default MoreVideosSingle