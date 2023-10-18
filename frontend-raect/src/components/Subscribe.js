import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Subscribe.module.css';
import { fetchUserLogIn, subscribe, unsubscribe } from '../store/usersSlice';

const Subscribe = (props) => {

    const user = props.user;
    const dispatch = useDispatch();
    const singleUser = useSelector((state) => state.users.singleUserLogIn);
    const pageNo = useSelector((state) => state.users.pageNo);
 
    const channelId = user.id;
    const userId = window.localStorage.getItem('userId')
    const subscriptions = singleUser?.subscriptions;


    useEffect(() => {
        if (singleUser === null) {
            // dispatch(fetchUserLogIn(userId));
            if(userId) {dispatch(fetchUserLogIn(userId));}
        }
    }, [singleUser, userId, dispatch]);

    const handleSubscribe = () => {
        dispatch(subscribe({userId, channelId, pageNo}));
        dispatch(fetchUserLogIn(userId));
    };

    const handleUnsubscribe = () => {
        dispatch(unsubscribe({userId, channelId, pageNo}));
        dispatch(fetchUserLogIn(userId));
    };
    if (singleUser === null) {
        return null;
    }

    const isSubscribed = subscriptions?.some(sub => sub.id === channelId);
  
    const isCurrentUser = channelId == userId;


  return (
    <div >
        {isSubscribed || isCurrentUser ? (null) : (
            <div className={styles.container} onClick={handleSubscribe}>
                +
            </div>
        )}
        {!isSubscribed ? (null) : (
            <div className={styles.container} onClick={handleUnsubscribe}>
                -
            </div>
        )}
    </div>
  )
}

export default Subscribe