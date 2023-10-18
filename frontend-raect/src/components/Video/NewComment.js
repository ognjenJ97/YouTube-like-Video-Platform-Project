import React, { useRef, useState } from 'react'
import styles from './Comment.module.css'
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/commentSlice';
import { fetchVideo } from '../../store/videoSlice';

const NewComment = (props) => {
    const video = props.video;
    const userId = window.localStorage.getItem("userId");
    const inputRef = useRef(null);

    var empty_newComment = {
        content: '',
        ownerId: userId,
        videoId: video.id
      };

    const [newComment, setNewComment] = useState(empty_newComment);
    const dispatch = useDispatch();

    const valueInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment((prev) => ({
          ...prev,
          [name]: value,
        }));
      };


    const handleAddComm = async () => {
        if (!userId) {
            alert("Please log in.");
            return;
        }

        if(!newComment.content) {
            alert("Please fill comment field.");
            return;
          }

        await dispatch(addComment(newComment));
        dispatch(fetchVideo(video.id));

        inputRef.current.value = '';
    };



  return (
    <div className={styles.containerNewComm}>
        <p>Enter new comment...</p>
        <input type='text'           
          id="content"
          name="content"
          placeholder="Enter comment"
          onChange={(e) => valueInputChange(e)}
          ref={inputRef}
          />
          <div className={styles.submitDiv} onClick={() => handleAddComm()}>Submit</div>
    </div>
  )
}

export default NewComment