import React, { memo, useState } from 'react'
import styles from './Comment.module.css'
import SingleComment from './SingleComment';
import NewComment from './NewComment';

const Comment = (props) => {

    const video = props.singleVideo;
    const allowedComment = video && video.allowComments;
    const [visibleComments, setVisibleComments] = useState(5);
    const sign = window.localStorage.getItem("jwt");


  if (video && video.comments) {
    console.log("KOMENTARI IZ KOMENTRA LDUILO");
    console.log(video.comments);
  } else {
    console.log("Nema komentara za ovaj video.");
  }

const sortCommentsByDate = (comments) => {
  return comments.slice().sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
};

  const renderComment = () => {
    const sortedComments = sortCommentsByDate(video.comments);
    return sortedComments.slice(0, visibleComments).map((comment) => {
      return (
        <div key={comment.id} className={styles.container2}>
          <SingleComment comment={comment} videoId={video.id} video={video}/>
        </div>
      );
    });
  };

  const handleLoadMore = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 5);
  };


  return (
    <div className={styles.container}>
      {allowedComment ? (
        <>
          {sign ? (<NewComment video={video}/>) : ("")}
          <p className={styles.p}>Comments:</p>
          {video && video.comments && video.comments.length > 0 ? (
            <div>
              {renderComment()}
              {video.comments.length > visibleComments && (
                <div onClick={handleLoadMore} className={styles.loadMoreButton}>
                  Load more...
                </div>
              )}
            </div>
          ) : (
            <p>No comments for this video.</p>
          )}
        </>
      ) : (
        <p>Comments are not allowed for this video.</p>
      )}
    </div>
  );
};

export default memo(Comment)