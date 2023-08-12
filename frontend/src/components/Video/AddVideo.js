import React, { useState } from 'react'
import styles from './AddVideo.module.css';
import { useDispatch } from 'react-redux';
import { addVideo } from '../../store/videoSlice';
import { useNavigate } from 'react-router-dom';
import { fetchUserLogIn } from '../../store/usersSlice';


const AddVideo = () => {

    const ownerId = window.localStorage.getItem('userId');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [videoData, setVideoData] = useState({
        ownerId: ownerId,
        title: '',
        videoUrl: '',
        thumbnailUrl: '',
        description: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setVideoData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddVideo = () => {
        if (
            videoData.title === '' ||
            videoData.videoUrl === '' ||
            videoData.thumbnailUrl === ''
        ) {
            alert('Please enter all the fields.');
            return;
        }

        if(videoData.title.length > 69) {
            alert('title is too long')
            return;
        }
        
        if(videoData.description.length > 299) {
            alert('description is too long')
            return;
        }

        dispatch(addVideo(videoData));
        dispatch(fetchUserLogIn(ownerId));
        navigate('/channel/' + ownerId);
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
            
                <input
                    className={styles.inputField}
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={videoData.title}
                    onChange={handleInputChange}
                />
                <input
                    className={styles.inputField}
                    type="text"
                    name="videoUrl"
                    placeholder="URL video"
                    value={videoData.videoUrl}
                    onChange={handleInputChange}
                />
                <input
                    className={styles.inputField}
                    type="text"
                    name="thumbnailUrl"
                    placeholder="URL thumbnail"
                    value={videoData.thumbnailUrl}
                    onChange={handleInputChange}
                />
                <textarea
                    className={styles.inputField}
                    name="description"
                    placeholder="description"
                    value={videoData.description}
                    onChange={handleInputChange}
                />
                <div className={styles.button}>
                    <button className={styles.addButton} onClick={handleAddVideo}>
                        Dodaj video
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddVideo;
