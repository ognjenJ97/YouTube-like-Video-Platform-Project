import React, { useEffect } from 'react'
import styles from './SingleChannelPage.module.css'
import Channel from '../Channel'
import ChannelDetail from './ChannelDetail'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearSingleUser, fetchUser } from '../../store/usersSlice'
import { clearVideoList } from '../../store/videoSlice'

const SingleChannelPage = () => {

    const routeParams = useParams();
    const userId = routeParams.id;

    const dispatch = useDispatch();
    const { singleUser } = useSelector((state) => state.users);
  
    useEffect(() => {
      dispatch(clearSingleUser())
      dispatch(clearVideoList([]));
      dispatch(fetchUser(userId));
    }, [dispatch, userId]);

    console.log("OVO JE IZ SINGLECHANNELPAGE komp")
    console.log(singleUser);

  return (
    <div className={styles.container}>
        <div className={styles.channels}><Channel /></div>
        
        <div className={styles.channelSingle}>
          <ChannelDetailMemo user={singleUser} />
        </div>
  </div>
  )
}

const ChannelDetailMemo = React.memo(ChannelDetail);

export default SingleChannelPage