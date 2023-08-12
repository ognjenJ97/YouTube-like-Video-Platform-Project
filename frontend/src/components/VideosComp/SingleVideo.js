import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './VideosComp.module.css';

const SingleVideo = (props) => {

    var navigate = useNavigate()

    const video = props.video;

    const firstName = props.video.ownerUsername;
    const firstLetter = firstName.charAt(0).toUpperCase();
    const formattedViews = props.video.views.toLocaleString();

    if(!video) {
        return (<div>Loading...</div>)
    }

    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      }
      return text;
    };


    const goToPlay = (id) => {
        navigate('/play/' + id);
    }

    const goToChannel= (id) => {
        navigate('/channel/' + id);
    }

    return (
        <div className={styles.videoRow}>
            <div className={styles.thumbnail} onClick={() => {goToPlay(props.video.id)}}>
                <img src={props.video.thumbnailUrl} alt="Thumbnail" />
            </div>
            <div className={styles.info}>
                <div className={styles.channel}><p>{firstLetter}</p></div>
                <div className={styles.infoText}>
                    <p className={styles.title} onClick={() => {goToPlay(props.video.id)}}>{truncateText(props.video.title, 22)}</p>
                    <p className={styles.username} onClick={() => {goToChannel(props.video.ownerId)}}>{props.video.ownerUsername}</p>
                    <p className={styles.views}>{formattedViews} views</p>
                </div>
            </div>
        </div>
      )
}

export default SingleVideo