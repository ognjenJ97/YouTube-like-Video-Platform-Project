import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../store/videoSlice';
import styles from './VideosComp.module.css'

const VIdeosPageChange = () => {

    const dispatch = useDispatch();

    const pageNo = useSelector((state) => state.videos.pageNo);
    const totalPages = useSelector((state) => state.videos.totalPages);

    const handleNextPage = () => {
        if (pageNo < totalPages - 1) {
            handlePageChange(pageNo + 1);
        }
      };

    const handlePageChange = (newPageNo) => {
        if (newPageNo < totalPages) {
          dispatch(fetchVideos({ pageNo: newPageNo}));
        }
    };


    if(pageNo === totalPages - 1) {
        return (
            <div className={styles.loadContainer2}><p className={styles.p}>No more video to load...</p></div>
        )
    }

  return (
    <div onClick={handleNextPage} className={styles.loadContainer}>
        <p className={styles.p}>Load more... </p>
    </div>
  )
}

export default VIdeosPageChange