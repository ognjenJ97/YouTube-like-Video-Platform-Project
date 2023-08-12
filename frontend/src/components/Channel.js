import React, { useEffect } from 'react';
import styles from './Channel.module.css';
import ChannelShortcut from './ChannelShortcut';
import ChannelPageNo from './ChannelPageNo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/usersSlice';

const Channel = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
      if (users.length === 0) {
        dispatch(fetchUsers({ pageNo: 0 }));
      }
    }, [dispatch, users]);


    const renderUser = () => {
        return users.map((user) => {
          return (
            <div key={user.id} className={styles.container2}>
                 <ChannelShortcut user={user} />
            </div>
          );
        });
      };

  return (
    <div className={styles.container}>
        <div className={styles.channels}><p className={styles.p}>Channels</p></div>
        {renderUser()}
        <ChannelPageNo />
    </div>
  )
}

export default Channel