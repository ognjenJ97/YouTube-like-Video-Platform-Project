import React from 'react'
import styles from './VideosComp.module.css';
import VIdeosList from './VIdeosList';

const VideosComp = () => {



  return (
    <div className={styles.container}>
      <VIdeosList />
    </div>
  )
}

export default VideosComp