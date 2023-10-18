import React from 'react'
import styles from './Comment.module.css'
import SingleCommentLikes from './SingleCommentLikes';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../store/commentSlice';

const SingleComment = (props) => {

    const dispatch = useDispatch();

    const video = props.video;

    if (!video) {
        return <div>Loading...</div>;
      }

    const comment = props.comment;
    const videoId = props.videoId;
    const firstName = comment.ownerUsername;
    const firstLetter = firstName.charAt(0).toUpperCase();
    const commentId = comment.id;
    const userId = window.localStorage.getItem("userId");
    const isOwnerVideo = video.ownerId == userId;
    const isOwnerComment = comment.ownerId == userId;

    const deleteHandler = () => {
        dispatch(deleteComment({commentId, videoId}));
        alert("Comment deleted")
    }

  return (
    <div className={styles.comm}>
        <div className={styles.letter}>
            {firstLetter}
        </div>
        <div className={styles.comm3} >
            <div className={styles.comm2}>
                <p className={styles.text2}>{comment.ownerUsername}</p>
                <p>{comment.creationDate}</p>
                <SingleCommentLikes comment={comment} videoId={videoId}/>
            </div>
            <div>{comment.content}</div>
        </div>
        {((isOwnerVideo && !isOwnerComment) || (!isOwnerVideo && isOwnerComment)) && (
            <div onClick={deleteHandler}>X</div>
        )}
       {isOwnerVideo && isOwnerComment && (
            <div onClick={deleteHandler}>X</div>
        )}
    </div>
  )
}

export default SingleComment