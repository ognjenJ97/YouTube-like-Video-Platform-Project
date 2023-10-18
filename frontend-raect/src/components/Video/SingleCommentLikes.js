import React, { useState } from 'react'
import styles from './Comment.module.css'
import { useDispatch } from 'react-redux';
import { addLikeDislike, deleteLikeDislike } from '../../store/likeDislikeSlice';
import { fetchVideo } from '../../store/videoSlice';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

const SingleCommentLikes = (props) => {

    const comment = props.comment;
    const videoId = props.videoId;
    const userId = window.localStorage.getItem("userId");
    console.log("user id u komentaru:" + userId); 

    var empty_newLike = {
      userId: userId,
      videoId: null,
      commentId: null,
      like: ""
    };

    const [newLike, setNewLike] = useState(empty_newLike);
    const dispatch = useDispatch();

    const userLikedDisliked = comment.likedDislikedComments.find(item => item.userId === parseInt(userId, 10));

    
    const likeCount = comment.likedDislikedComments.reduce((count, item) => {
      return item.like ? count + 1 : count;
    }, 0);

    const dislikeCount = comment.likedDislikedComments.reduce((count, item) => {
        return !item.like ? count + 1 : count;
    }, 0);

    const likeIconClass = userLikedDisliked && userLikedDisliked.like ? styles.like : styles.noLike;
    
    const dislikeIconClass = userLikedDisliked && !userLikedDisliked.like ? styles.like : styles.noLike;
    


    const handleAddLike = async (likeValue, videoIdValue = null) => {
      if (!userId) {
          alert("Please log in.");
          return;
      }
  
      const updatedNewLike = {
          ...newLike,
          videoId: videoIdValue,
          commentId: comment.id,
          like: likeValue,
      };

      console.log("userLikedDisliked:", userLikedDisliked);

      if (userLikedDisliked && userLikedDisliked.like === likeValue) {
          console.log("Deleting existing like/dislike:", userLikedDisliked);
          dispatch(deleteLikeDislike(userLikedDisliked.id));
          dispatch(fetchVideo(videoId));
          return;
      }
  
      if (userLikedDisliked && userLikedDisliked.like !== likeValue) {
          console.log("Deleting existing like/dislike:", userLikedDisliked);
          dispatch(deleteLikeDislike(userLikedDisliked.id));
      }
          
      setNewLike(updatedNewLike);
  
      await dispatch(addLikeDislike(updatedNewLike));
      dispatch(fetchVideo(videoId));
  };

  return (
    <div className={styles.box}>
        <p className={likeIconClass} onClick={() => handleAddLike(true)}> <FaThumbsUp /> Likes : {likeCount}</p>
        <p className={dislikeIconClass} onClick={() => handleAddLike(false)}> <FaThumbsDown/> Dislikes : {dislikeCount}</p>
    </div>
  )
}

export default SingleCommentLikes