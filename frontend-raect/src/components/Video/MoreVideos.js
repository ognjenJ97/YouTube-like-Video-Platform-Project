import React, { memo, useEffect } from 'react';
import styles from './MoreVideos.module.css'
import { useDispatch, useSelector } from 'react-redux';
import MoreVideosSingle from './MoreVideosSingle';
import { fetchVideos, updatePageNo, updateSort, updateText, clearVideoList } from '../../store/videoSlice';

const MoreVideos = () => {

    const dispatch = useDispatch();

    const videos = useSelector(state => state.videos.videos); 
    const pageNo = useSelector((state) => state.videos.pageNo);
    const totalPages = useSelector((state) => state.videos.totalPages);

    useEffect(() => {
      dispatch(updateSort(2));
      dispatch(updateText(''));
      dispatch(updatePageNo(0));
      dispatch(clearVideoList([]));
  
      console.log("More video video folder");
      dispatch(fetchVideos({ pageNo: 0 }));
    }, [dispatch]);

      const handlePageChange = (newPageNo) => {
        console.log("More video video folder + pageNo")
        dispatch(fetchVideos({ pageNo: newPageNo }));
      };
    
      const handleNextPage = () => {
        console.log("More video video folder -")
        handlePageChange(pageNo + 1);
      };



    const renderVideo = () => {
        return videos.map((video) => {
          return (
            <div key={video.id}>
                 <MoreVideosSingle video={video} />
            </div>
          );
        });
      }


  return (
    <div className={styles.container}>
        <div className={styles.text}><p>Explore more videos: </p></div>
        <div>{renderVideo()}</div>
        <div>
            {pageNo === totalPages - 1 ? (<p>No more videos...</p>) : 
            (<div onClick={handleNextPage}>Show more...</div>)}
        </div>
    </div>
  )
}

export default memo(MoreVideos);