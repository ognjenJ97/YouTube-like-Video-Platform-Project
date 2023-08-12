import React from 'react';
import styles from './ChannelShortcut.module.css';
import { useNavigate } from 'react-router-dom';
import Subscribe from './Subscribe';

const ChannelShortcut = (props) => {

  const navigate = useNavigate();
  const goToChannel= (id) => {
    navigate('/channel/' + id);
}
  const user = props.user;
  const firstName = props.user.firstName;
  const firstLetter = firstName.charAt(0);

  return (
    <div className={styles.container}>
      <div className={styles.initial} onClick={() => goToChannel(props.user.id)}>{firstLetter}</div>
      <div className={styles.userinfo} onClick={() => goToChannel(props.user.id)}>{firstName + " " + props.user.lastName}'s Channel</div>
      <div className={styles.subscribers}><Subscribe user={user}/></div>
    </div>
  );
}

export default ChannelShortcut;