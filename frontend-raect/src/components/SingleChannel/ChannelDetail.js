import React, { useState } from 'react'
import styles from './ChannelDetail.module.css'
import SingleChannelVideos from './SingleChannelVideos';
import InfoComponent from './InfoComponent';
import SubscribersComponent from './SubscribersComponent';
import { useNavigate } from 'react-router-dom';

const ChannelDetail = ({user}) => {

    const [selectedComponent, setSelectedComponent] = useState('videos');
    const navigate = useNavigate();

    if (!user) {
        return <div>Loading...</div>;
      }

    const handleComponentChange = (componentName) => {
        setSelectedComponent(componentName);
      };

    const firstName = user.firstName;
    const firstLetter = firstName.charAt(0).toUpperCase();
    const ownerId = user.id;
    const userId = window.localStorage.getItem("userId");
    const isOwner = ownerId == userId;

    const subs = user.subscribers;

    const subsCount = subs.reduce((count, item) => {
        return item.id ? count + 1 : count;
    }, 0);


    const goToEditChannel = () => {
      navigate('/EditChannel')
    }

    const goToAddVideo = () => {
      navigate('/addVideo')
    }

    const goToChange = () => {
      navigate('/changePassword')
    }

    

  return (
    <div className={styles.container}>
        <div className={styles.container}>
            <div className={styles.container2}>
                <div className={styles.picture}>{firstLetter}</div>
                <div className={styles.container3}>
                    <div className={styles.username}>Username: {user.username}</div>
                    <div className={styles.container4}>
                        <p>Subscribers: {subsCount}</p>
                    </div>
                </div>
            </div>
            <div className={styles.container5}>
                <div className={styles.container6} onClick={() => handleComponentChange('videos')}><p>Videos</p></div>
                <div className={styles.container6} onClick={() => handleComponentChange('info')}><p>Info</p></div>
                <div className={styles.container6} onClick={() => handleComponentChange('subscribers')}><p>Subscribers</p></div>
                {isOwner && (<div className={styles.container6} onClick={goToEditChannel}><p>Edit profile</p></div>)}
                {isOwner && (<div className={styles.container6} onClick={goToAddVideo}><p>+ Add video</p></div>)}
                {isOwner && (<div className={styles.container10} onClick={goToChange}><p>Change password</p></div>)}
            </div>
        </div>
        <div className={styles.container7}>
            {selectedComponent === 'videos' && <SingleChannelVideos user={user} />}
            {selectedComponent === 'info' && <InfoComponent user={user} />}
            {selectedComponent === 'subscribers' && (
            <SubscribersComponent user={user} />
            )}
      </div>
    </div>
  )
}

export default ChannelDetail