import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos, restartParams } from '../../store/videoSlice'
import VIdeosPageChange from './VIdeosPageChange'
import styles from './VideosComp.module.css';
import SingleVideo from './SingleVideo';
import Search from './Search';

const VIdeosList = () => {

    const dispatch = useDispatch()
    const videos = useSelector(state => state.videos.videos); 

    useEffect(() => {
        dispatch(restartParams())
        console.log("Prvi put se dispacuju videos")
        dispatch(fetchVideos({pageNo : 0}))
    }, [])

    if (!videos) {
       return <div>loading..</div>
    }

    const renderVideos = () => {
        return videos.map((video) => {
            return (
                <div key={video.id} id={video.id} className={styles.container2}>
                    <SingleVideo video={video}/>
                </div>
            )
        })
    }
    


  return (
    <>
        <div className={styles.search}><Search /></div>
        <div className={styles.container3}>{renderVideos()}</div>
        <div className={styles.pageNo}><VIdeosPageChange /></div>
    </>
    
  )
}

export default VIdeosList