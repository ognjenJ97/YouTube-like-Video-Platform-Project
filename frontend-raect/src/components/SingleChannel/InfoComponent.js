import React from 'react'
import styles from './ChannelDetail.module.css'

const InfoComponent = (props) => {

    const user = props.user;


  return (
    <div className={styles.infoComponent}>
        <p className={styles.p}>First name: {user.firstName}</p>
        <p className={styles.p}>Last name: {user.lastName}</p>
        <p className={styles.p}>Youtube member since: {user.registrationDate}</p>
        <p className={styles.p}>Email: {user.email}</p>
        <p className={styles.p}>Description:</p>
        <p className={styles.p}>{user.channelDescription}</p>
    </div>
  )
}

export default InfoComponent