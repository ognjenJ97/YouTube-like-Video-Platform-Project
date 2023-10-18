import React, { memo, useState } from 'react'
import styles from './JustVideo.module.css'
import VIdeoPlayer from './VIdeoPlayer';
import { useNavigate } from 'react-router-dom';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addLikeDislike, deleteLikeDislike } from '../../store/likeDislikeSlice';
import { fetchVideo } from '../../store/videoSlice';

const JustVideo = (props) => {

    const video = props.singleVideo;
    
    const userId = window.localStorage.getItem("userId");


    var empty_newLike = {
        userId: userId,
        videoId: null,
        commentId: null,
        like: ""
      };

    const [newLike, setNewLike] = useState(empty_newLike);
    const dispatch = useDispatch();

    
    const navigate = useNavigate();
    const goToChannel= (id) => {
      navigate('/channel/' + id);
  }
    console.log('Video:', video);

    if (!video) {
        return <div>Loading...</div>;
      }

      
    const allowedRating = video && video.showRatings;

    const isAdmin = window.localStorage.getItem("role") === "ROLE_ADMIN";
    const isOwner = userId == props.singleVideo.ownerId; 


    const formattedViews = video.views.toLocaleString();
    const firstName = video.ownerUsername;
    const firstLetter = firstName.charAt(0).toUpperCase();

    const likeCount = video.likedDislikedVideos.reduce((count, item) => {
        return item.like ? count + 1 : count;
    }, 0);

    const dislikeCount = video.likedDislikedVideos.reduce((count, item) => {
        return !item.like ? count + 1 : count;
    }, 0);

    const userLikedDisliked = video.likedDislikedVideos.find(item => item.userId === parseInt(userId, 10));

    const likeIconClass = userLikedDisliked && userLikedDisliked.like ? styles.like : styles.noLike;

    const dislikeIconClass = userLikedDisliked && !userLikedDisliked.like ? styles.like : styles.noLike;


    const handleAddLike = async (likeValue, commentIdValue = null) => {
        if (!userId) {
            alert("Please log in");
            return;
        }
    
        const updatedNewLike = {
            ...newLike,
            videoId: video.id,
            commentId: commentIdValue,
            like: likeValue,
        };

        

        console.log("OVO JE OBJEKAT userLikedDisliked: ", userLikedDisliked);

        if (userLikedDisliked && userLikedDisliked.like === likeValue) {
            console.log("Deleting existing like/dislike: ", userLikedDisliked);
            dispatch(deleteLikeDislike({ userLikedDislikedId: userLikedDisliked.id, videoId: video.id }));
            console.log("Obrisan je lajk ili dislajk koji je vec postojao")
            return;
        }
    
        if (userLikedDisliked && userLikedDisliked.like !== likeValue) {
            console.log("Deleting existing like/dislike: ", userLikedDisliked);
            dispatch(deleteLikeDislike({ userLikedDislikedId: userLikedDisliked.id, videoId: video.id }));
            console.log("Obrisan je lajk ili dislajk koji je vec bio")
        }
            
        setNewLike(updatedNewLike);
    
        await dispatch(addLikeDislike(updatedNewLike));
        dispatch(fetchVideo(video.id));
    };

    const goToEdit = (id) => {
        navigate('/editVIdeo/' + id );
    }



  return (
    
        <div className={styles.container}>
        <div className={styles.video}><VIdeoPlayer videoUrl={video.videoUrl}/></div>
        <div className={styles.info}>
            <div className={styles.info2}>
                <div className={styles.info4}>
                    <div className={styles.letter}>{firstLetter}</div>
                    <div>
                        <p className={styles.title}>{video.title}</p>
                        <div onClick={() => {goToChannel(video.ownerId)}}>{video.ownerUsername}</div>
                        {isAdmin || isOwner ? (<div className={styles.edit} onClick={() => {goToEdit(video.id)}}>Edit</div>) : ('')}
                    </div>
                </div>
                <div>
                    <div>
                        {allowedRating ? (
                        <div>
                            <p className={likeIconClass} onClick={() => handleAddLike(true)}> <FaThumbsUp /> Likes : {likeCount}</p>
                            <p className={dislikeIconClass} onClick={() => handleAddLike(false)}> <FaThumbsDown/> Dislikes : {dislikeCount}</p>
                        </div>
                        ) : (
                            <p>No rating allowed</p>
                        )}

                    </div>
                </div>
            </div>
            <div className={styles.info3}>
                <div >
                    <p className={styles.views}>Views: {formattedViews}</p>
                    <p className={styles.views}>Uploaded: {video.creationDate}</p>
                </div>
                <div>
                    <div className={styles.desc}>Description:</div>
                    <p>{video.description}</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default memo(JustVideo)