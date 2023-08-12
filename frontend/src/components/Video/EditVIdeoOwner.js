import React, { useState } from 'react'
import styles from './EditVideo.module.css'
import { useDispatch } from 'react-redux';
import { clearVideoList, deleteVideo, editVideo } from '../../store/videoSlice';
import { useNavigate } from 'react-router-dom';

const EditVIdeoOwner = (props) => {

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

    const deleteVideoHandler = () => {
        dispatch(deleteVideo(updateVideo.id));
        dispatch(clearVideoList([]));
        console.log("Delete komponenta")
        navigate('/')
    }

  return (
    <div className={styles.editOwner}>
        <div className={styles.editOwnerSingle}>
            <label>Title</label>
            <input type='text' id='title' name='title' value={updateVideo.title} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className={styles.editOwnerSingle}>
            <label>Video URL</label>
            <input type='text' id='videoUrl' name='videoUrl' value={updateVideo.videoUrl} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className={styles.editOwnerSingle}>
            <label> Thumbnail</label>
            <input type='text' id='thumbnailUrl' name='thumbnailUrl' value={updateVideo.thumbnailUrl} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className={styles.editOwnerSingle}>
            <label>Description</label>
            <input type='text' id='description' name='description' value={updateVideo.description} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className={styles.editOwnerSingle}>
            <label>Visibility</label>
            <select id='visibility' name='visibility' value={updateVideo.visibility.toString()} onChange={(e) => onInputChange(e)}>
                <option value="PUBLIC">Public</option>
                <option value="PRIVATE">Private</option>
            </select>
        </div>
        <div className={styles.editOwnerSingle}>
            <label>Allow comments</label>
            <select id='allowComments' name='allowComments' value={updateVideo.allowComments.toString()} onChange={(e) => onInputChange(e)}>
                <option value="true">Allowed</option>
                <option value="false">Not Allowed</option>
            </select>
        </div>
        <div className={styles.editOwnerSingle}>
            <label>Show rating</label>
            <select id='showRatings' name='showRatings' value={updateVideo.showRatings.toString()} onChange={(e) => onInputChange(e)}>
                <option value="true">Allowed</option>
                <option value="false">Not Allowed</option>
            </select>
        </div>

        <div className={styles.saveButton} onClick={() => {editHandler()}}>Save changes</div>
        <div className={styles.saveButton} onClick={deleteVideoHandler}>Delete video</div>
    </div>
  )
}

export default EditVIdeoOwner