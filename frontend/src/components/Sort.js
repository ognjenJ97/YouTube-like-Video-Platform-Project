
import React, { useEffect } from 'react';
import styles from './Sort.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos, updatePageNo, updateSort } from '../store/videoSlice';

const Sort = () => {
  const sort = useSelector((state) => state.videos.sort);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePageNo(0));
  }, []);

  const handleChangeSort = (newSortValue) => {
    console.log("Ovo je novi sort : " + newSortValue)
    dispatch(updateSort(newSortValue));
    dispatch(fetchVideos({pageNo: 0}));
  };

  return (
    <div className={styles.container}>
      <select value={sort} onChange={(e) => handleChangeSort(e.target.value)}>
        <option value={2}>Views down</option>
        <option value={1}>Views up</option>
        <option value={4}>Newest</option>
        <option value={3}>Oldest</option>
      </select>
    </div>
  );
};

export default Sort;