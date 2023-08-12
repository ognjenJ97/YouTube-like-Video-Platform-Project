import React, { useState } from 'react'
import styles from './SubscribersComponent.module.css'
import { useNavigate } from 'react-router-dom';
import Subscribe from '../Subscribe';

const SubscribersComponent = (props) => {

  const navigation = useNavigate();
  const [visibleSubscribers, setVisibleSubscribers] = useState(5);
  const [visibleSubscriptions, setVisibleSubscriptions] = useState(5);

  const user = props.user;
  
  console.log("OVO JE USER IZ SUBS KOMPONENTE - NA OVO CILJAS")
  console.log(user)

  const subscribers = user.subscribers;
  const subscriptions = user.subscriptions;

  const goToChannel = (id) => {
    navigation('/channel/' + id)
  }

  console.log(subscribers)
  console.log(subscriptions)

  const renderSubscribers = () => {
    return (
      subscribers.slice(0, visibleSubscribers).map((subs) => {
        return (
          <div key={subs.id} className={styles.container2}>
            <div className={styles.initial} onClick={() => {goToChannel(subs.id)}}>{subs.username.charAt(0).toUpperCase()}</div>
            <div className={styles.userinfo} onClick={() => {goToChannel(subs.id)}}>{subs.username}' Channel</div>
            <Subscribe user={subs}/>
          </div>
        )
      })
    )
  }

  const renderSubscriptions = () => {
    return (
      subscriptions.slice(0, visibleSubscriptions).map((subs) => {
        return (
          <div key={subs.id} className={styles.container2}>
            <div className={styles.initial} onClick={() => {goToChannel(subs.id)}}>{subs.username.charAt(0).toUpperCase()}</div>
            <div className={styles.userinfo} onClick={() => {goToChannel(subs.id)}}>{subs.username}' Channel</div>
            <Subscribe user={subs}/>
          </div>
        )
      })
    )
  }


  const handleLoadMoreSubs = () => {
    setVisibleSubscribers((prevVisibleSubscribers) => prevVisibleSubscribers + 5)
  }

  const handleLoadMoreSubscriptions = () => {
    setVisibleSubscriptions((prevVisibleSubscribers) => prevVisibleSubscribers + 5)
  }


  return (
    <div className={styles.container}>

      <div className={styles.container3}>
        <div>Subscribers:</div>
        <div>
          {user && subscribers && subscribers.length > 0 ? (
            <div>
              {renderSubscribers()}
              {subscribers.length > visibleSubscribers && (
                <div onClick={handleLoadMoreSubs}>
                  Load more...
                </div>
              )}
            </div>
          ) : (
            <p className={styles.p}>No subscribers.</p>
          )}
        </div>
      </div>

      <div className={styles.container3}>
        <div>Subscriptions:</div>
        <div>
          {user && subscriptions && subscriptions.length > 0 ? (
            <div>
              {renderSubscriptions()}
              {subscriptions.length > visibleSubscriptions && (
                <div onClick={handleLoadMoreSubscriptions}>
                  Load more...
                </div>
              )}
            </div>
          ) : (
            <p className={styles.p}>No subscribers.</p>
          )}
        </div>
      </div>

    </div>
  )
}

export default SubscribersComponent