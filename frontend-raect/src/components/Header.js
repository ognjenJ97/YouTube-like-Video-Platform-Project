import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { SiYoutube } from 'react-icons/si';
import { logout } from '../services/auth';
import { useDispatch } from 'react-redux';
import { clearSingleUserLogIn } from '../store/usersSlice';

const Header = () => {

    const sign = window.localStorage.getItem("jwt");
    const dispatch = useDispatch();
    const userId = window.localStorage.getItem("userId");

     
    const handleLogout = () => {
        logout();
        dispatch(clearSingleUserLogIn());
      };

  return (
    <header className={styles.header}>
        <div className={styles.box}>
        <SiYoutube size="80" color="red" />
            <Link to="/" className={styles.text}>YouTube</Link>
            {userId && <div className={styles.profile}><Link to={`/channel/${userId}`} className={styles.text2}>Enter your profile</Link></div>}
            {userId && <div className={styles.profile2}><Link to={`/addVideo`} className={styles.text}>+ Video</Link></div>}
        </div>
        {!sign ? (
            <div className={styles.box}>
            <Link to="/login" className={styles.text}>
                Login 
            </Link>
            <div className={styles.text}> / </div>
            <Link to="/registration" className={styles.text}>
                 Sign up
            </Link>
        </div>
        ) : (
            <div className={styles.box}>
                <p className={styles.p} onClick={handleLogout}>Log out</p>
            </div>
        )}
        

  </header>
  )
}

export default Header