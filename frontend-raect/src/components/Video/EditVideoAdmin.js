import React, { useState } from 'react'
import styles from './EditVideo.module.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editVideo } from '../../store/videoSlice';

const EditVideoAdmin = (props) => {


    const video = props.video;
    const [updateVideo, setUpdateVideo] = useState(video);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!video) {
        return <div>Loading...</div>;
      }

    const onInputChange = (event) => {
        const { name, value } = event.target;
    
        setUpdateVideo((prev) => ({
          ...prev,
          [name]: value,
        }));
      };


    const editHandler = () => {

        if (
            updateVideo.title.trim() === '' ||
            updateVideo.videoUrl.trim() === '' ||
            updateVideo.thumbnailUrl.trim() === ''
        ) {
            alert('Enter all fields')
            return;
        }
        dispatch(editVideo({updateVideo}));
        navigate('/play/' + updateVideo.id);
    }

  return (
    <div className={styles.editOwner2}>
        <div className={styles.editOwnerSingle2}>
            <label>Title</label>
            <p>{updateVideo.title}</p>
        </div>
        <div className={styles.editOwnerSingle2}>
            <label>Video URL</label>
            <p>{updateVideo.videoUrl}</p>
        </div>
        <div className={styles.editOwnerSingle2}>
            <label> Thumbnail</label>
            <p>{updateVideo.thumbnailUrl}</p>
        </div>
        <div className={styles.editOwnerSingle2}>
            <label>Description</label>
            <p>{updateVideo.description}</p>
        </div>
        <div className={styles.editOwnerSingle2}>
            <label>Visibility</label>
            <select id='visibility' name='visibility' value={updateVideo.visibility.toString()} onChange={(e) => onInputChange(e)}>
                <option value="PUBLIC">Public</option>
                <option value="PRIVATE">Private</option>
            </select>
        </div>
        <div className={styles.editOwnerSingle2}>
            <label>Allow comments</label>
            <select id='allowComments' name='allowComments' value={updateVideo.allowComments.toString()} onChange={(e) => onInputChange(e)}>
                <option value="true">Allowed</option>
                <option value="false">Not Allowed</option>
            </select>
        </div>
        <div className={styles.editOwnerSingle2}>
            <label>Show rating</label>
            <select id='showRatings' name='showRatings' value={updateVideo.showRatings.toString()} onChange={(e) => onInputChange(e)}>
                <option value="true">Allowed</option>
                <option value="false">Not Allowed</option>
            </select>
        </div>
        <div className={styles.editOwnerSingle2}>
            <label>Block video</label>
            <select id='blocked' name='blocked' value={updateVideo.blocked.toString()} onChange={(e) => onInputChange(e)}>
                <option value="true">Blocked</option>
                <option value="false">Not Blocked</option>
            </select>
        </div>
        

        <div className={styles.saveButton2} onClick={() => {editHandler()}}>Save changes</div>
    </div>
  )
}

export default EditVideoAdmin