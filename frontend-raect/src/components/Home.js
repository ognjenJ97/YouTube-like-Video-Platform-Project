import React, { useEffect } from 'react';
import Channel from './Channel';
import styles from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserLogIn, fetchUsers, pageNoEmpty } from '../store/usersSlice';
import VideosComp from './VideosComp/VideosComp';

const Home = () => {
    const dispatch = useDispatch();
    const pageNo = useSelector(state => state.users.pageNo);
    const userId = window.localStorage.getItem('userId')


  useEffect(() => {
    if(userId) {dispatch(fetchUserLogIn(userId));}
    dispatch(pageNoEmpty({pageNo : 0}));
    dispatch(fetchUsers({ pageNo: pageNo }));
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.channel}>
        <Channel />
      </div>
      <div className={styles.videos}>
        <VideosComp />
      </div>
    </div>
  );
};

export default Home;