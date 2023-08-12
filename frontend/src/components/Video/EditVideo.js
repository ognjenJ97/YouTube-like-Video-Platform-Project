import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchVideo } from '../../store/videoSlice';
import styles from './EditVideo.module.css';
import EditVIdeoOwner from './EditVIdeoOwner';
import EditVideoAdmin from './EditVideoAdmin';

const EditVideo = () => {

    const userId = window.localStorage.getItem("userId");
    var navigate = useNavigate();
    const routeParams = useParams();
    var videoId = routeParams.id;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchVideo(videoId));
    }, [])

    const video = useSelector(state => state.videos.singleVideo)

    if (!video) {
        return <div>Loading...</div>;
      }

    const isAdmin = window.localStorage.getItem("role") === "ROLE_ADMIN";
    const isOwner = userId == video.ownerId; 

    const goToPlay = () => {
      navigate('/play/' + videoId)
    }

  return (
        <div className={styles.container}>
            {isAdmin && isOwner && <EditVIdeoOwner video={video}/>}
            {isAdmin && !isOwner && <EditVideoAdmin video={video} />}
            {isOwner && !isAdmin && <EditVIdeoOwner video={video}/>}
            {!isAdmin && !isOwner && {goToPlay}}
        </div>
  )
}

export default EditVideo