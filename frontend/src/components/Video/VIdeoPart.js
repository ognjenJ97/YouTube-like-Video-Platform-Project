import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearSingleVideo, fetchVideo, newView} from '../../store/videoSlice';
import styles from './VideoSingle.module.css';
import JustVideo from './JustVideo';
import Comment from './Comment';

const VIdeoPart = () => {

    const routeParams = useParams();
    const dispatch = useDispatch();

    const videoId = routeParams.id;
    const userId = window.localStorage.getItem("userId");
  
    const { singleVideo } = useSelector((state) => state.videos, shallowEqual);
  

    useEffect(() => {
        dispatch(clearSingleVideo());
        dispatch(fetchVideo(videoId));
        dispatch(newView(videoId));
      }, [dispatch, videoId]);
    
      if (!singleVideo) {
        return <div>Loading...</div>;
      }
  
    
      const isAdmin = window.localStorage.getItem("role") === "ROLE_ADMIN";
      const isOwner = userId == singleVideo.ownerId; 
      const isBlocked = singleVideo.blocked;
      const isPrivate = singleVideo.visibilty == 'PRIVATE';


  return (
    <div className={styles.container}>
      {isBlocked && !isAdmin && !isOwner && (
        <div className={styles.message}>This video is blocked</div>
      )}
      {isPrivate && !isOwner && (
        <div className={styles.message}>This video is private</div>
      )}
      {!isBlocked && !isPrivate && (
        <div className={styles.container2}>
          <div className={styles.video}>
            {
              <>
                <JustVideo singleVideo={singleVideo} />
                <div><Comment singleVideo={singleVideo} /></div>
              </>
            }
          </div>
        </div>
      )}
      {((isBlocked || isPrivate) && (isAdmin || isOwner)) && (
        <div className={styles.container2}>
          <div className={styles.video}>
              <>
                <JustVideo singleVideo={singleVideo} />
                <div><Comment singleVideo={singleVideo} /></div>
              </>
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(VIdeoPart)