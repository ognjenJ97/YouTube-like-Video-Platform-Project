import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/usersSlice';
import styles from './Channel.module.css';

const ChannelPageNo = () => {

    const dispatch = useDispatch();

    const pageNo = useSelector((state) => state.users.pageNo);
    const totalPages = useSelector((state) => state.users.totalPages);

    const handlePageChange = (newPageNo) => {
      dispatch(fetchUsers({ pageNo: newPageNo }));
  };

  const handlePrevPage = () => {
    if (pageNo > 0) {
      handlePageChange(pageNo - 1);
    }
  };

  const handleNextPage = () => {
    console.log('Next page je stisnut')
    console.log('pageN:' + pageNo)
    console.log('total page: ' + totalPages)
      handlePageChange(pageNo + 1);
  };


  return (
    <div className={styles.page}>
        <button className={styles.page2} disabled={pageNo === 0} onClick={handlePrevPage}>&lt;</button>
        <button className={styles.page2} disabled={pageNo === totalPages - 1} onClick={handleNextPage}>&gt;</button>
  </div>
  )
}

export default ChannelPageNo