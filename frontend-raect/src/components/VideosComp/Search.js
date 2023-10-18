import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './Search.module.css';
import Sort from '../Sort';
import { useDispatch, useSelector } from 'react-redux';
import { updateText, fetchVideos } from '../../store/videoSlice';



const Search = () => {

  const text = useSelector((state) => state.videos.text);
  const dispatch = useDispatch();
  const inputRef = useRef(text);

  const handleChangeText = () => {
    const newText = inputRef.current.value;
    dispatch(updateText(newText));
    console.log("Pozivan dispatch videos preko search komponente")
    dispatch(fetchVideos({pageNo: 0 }));
  };


  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search by title..."
          className={styles.inputtext}
        />
        <div className={styles.iconcontainer} onClick={handleChangeText}>
          <FaSearch className={styles.icon} />
        </div>
      </div>
      <Sort />
    </div>
  );
};

export default Search;