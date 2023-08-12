import React, { useState } from 'react'
import styles from './SingleChannelVideos.module.css'
import { useNavigate } from 'react-router-dom';

const SingleChannelVideos = (props) => {

  const navigation = useNavigate();
  const isAdmin = window.localStorage.getItem("role") === "ROLE_ADMIN";
  const user = props.user;
  const ownerId = user.id;
  const userId = window.localStorage.getItem("userId");
  const videos = user.videos;
  const videosByDate = [...videos];
  const videosByViews = [...videos];
  const videosBlocked = [...videos];
  const videosPrivate = [...videos];

  const [visibleVideosByDate, setVisibleVideosByDate] = useState(3);
  const [visibleVideosByDateMin, setVisibleVideosByDateMin] = useState(0);
  const [visibleVideosByViews, setVisibleVideosByViews] = useState(3);
  const [visibleVideosByViewsMin, setVisibleVideosByViewsMin] = useState(0);
  const [visibleVideosBlocked, setVisibleVideosBlocked] = useState(3);
  const [visibleVideosBlockedMin, setVisibleVideosBlockedMin] = useState(0);
  const [visibleVideosPrivate, setVisibleVideosPrivate] = useState(3);
  const [visibleVideosPrivateMin, setVisibleVideosPrivateMin] = useState(0);

  const filteredVideosByDate = videosByDate.filter(video => (
    video.visibility === 'PUBLIC' && !video.blocked));
  const filteredVideosByViews = videosByViews.filter(video => (
    video.visibility === 'PUBLIC' && !video.blocked));
  const filteredVideosBlocked = videosBlocked.filter(video => video.blocked);
  const filteredVideosPrivate = videosPrivate.filter(video => video.visibility === 'PRIVATE');

filteredVideosByDate.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
filteredVideosByViews.sort((a, b) => b.views - a.views);
filteredVideosBlocked.sort((a, b) => b.views - a.views);
filteredVideosPrivate.sort((a, b) => b.views - a.views);

  const goToPlay = (id) => {
    navigation('/play/' + id);
  }

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

const renderVideosPrivate = () => {
    return (
      filteredVideosPrivate.slice(visibleVideosPrivateMin, visibleVideosPrivate).map((video) => {
        return (
          <div className={styles.videoRow} key={video.id}>
          <div className={styles.thumbnail} onClick={() => {goToPlay(video.id)}}>
              <img src={video.thumbnailUrl} alt="Thumbnail" />
          </div>
          <div className={styles.info}>
              <div className={styles.infoText}>
                  <p className={styles.title} onClick={() => {goToPlay(video.id)}}> {truncateText(video.title, 22)}</p>
                  <p className={styles.views}>{video.views.toLocaleString()} views</p>
              </div>
          </div>
      </div>
        )
      })
    )
}

const renderVideosBlocked = () => {
  return (
    filteredVideosBlocked.slice(visibleVideosBlockedMin, visibleVideosBlocked).map((video) => {
      return (
        <div className={styles.videoRow} key={video.id}>
        <div className={styles.thumbnail} onClick={() => {goToPlay(video.id)}}>
            <img src={video.thumbnailUrl} alt="Thumbnail" />
        </div>
        <div className={styles.info}>
            <div className={styles.infoText}>
                <p className={styles.title} onClick={() => {goToPlay(video.id)}}> {truncateText(video.title, 22)}</p>
                <p className={styles.views}>{video.views.toLocaleString()} views</p>
            </div>
        </div>
    </div>
      )
    })
  )
}

  const renderVideosByDate = () => {
    return (
      filteredVideosByDate.slice(visibleVideosByDateMin, visibleVideosByDate).map((video) => {
        return (
          <div className={styles.videoRow} key={video.id}>
          <div className={styles.thumbnail} onClick={() => {goToPlay(video.id)}}>
              <img src={video.thumbnailUrl} alt="Thumbnail" />
          </div>
          <div className={styles.info}>
              <div className={styles.infoText}>
                  <p className={styles.title} onClick={() => {goToPlay(video.id)}}> {truncateText(video.title, 22)}</p>
                  <p className={styles.views}>{video.views.toLocaleString()} views</p>
              </div>
          </div>
      </div>
        )
      })
    )
  }

  const renderVideosByViews = () => {
    return (
      filteredVideosByViews.slice(visibleVideosByViewsMin, visibleVideosByViews).map((video) => {
        return (
          <div className={styles.videoRow} key={video.id}>
          <div className={styles.thumbnail} onClick={() => {goToPlay(video.id)}}>
              <img src={video.thumbnailUrl} alt="Thumbnail" />
          </div>
          <div className={styles.info}>
              <div className={styles.infoText}>
                  <p className={styles.title} onClick={() => {goToPlay(video.id)}}> {truncateText(video.title, 22)}</p>
                  <p className={styles.views}>{video.views.toLocaleString()} views</p>
              </div>
          </div>
      </div>
        )
      })
    )
  }

  const handleLoadMoreVideosByDate = () => {
    setVisibleVideosByDate((prev) => prev + 3)
    setVisibleVideosByDateMin((prev) => prev +3)
  }

  const handleLoadLessVideosByDate = () => {
    setVisibleVideosByDate((prev) => prev - 3)
    setVisibleVideosByDateMin((prev) => prev - 3)
  }

  const handleLoadMoreVideosByViews = () => {
    setVisibleVideosByViews((prev) => prev + 3)
    setVisibleVideosByViewsMin((prev) => prev + 3)
  }

  const handleLoadLessVideosByViews = () => {
    setVisibleVideosByViews((prev) => prev - 3)
    setVisibleVideosByViewsMin((prev) => prev - 3)
  }

  const handleLoadMoreVideosBlocked = () => {
    setVisibleVideosBlocked((prev) => prev + 3)
    setVisibleVideosBlockedMin((prev) => prev + 3)
  }

  const handleLoadLessVideosBlocked = () => {
    setVisibleVideosBlocked((prev) => prev - 3)
    setVisibleVideosBlockedMin((prev) => prev - 3)
  }

  const handleLoadMoreVideosPrivate = () => {
    setVisibleVideosPrivate((prev) => prev + 3)
    setVisibleVideosPrivateMin((prev) => prev + 3)
  }

  const handleLoadLessVideosPrivate = () => {
    setVisibleVideosPrivate((prev) => prev - 3)
    setVisibleVideosPrivateMin((prev) => prev - 3)
  }


  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div>Recent videos:</div>
        <div className={styles.container3}>

          {visibleVideosByDateMin > 0 ? (
            <div onClick={handleLoadLessVideosByDate} className={styles.button1}>Prev page</div>
             ) : (
            <div className={styles.button2}>Prev page</div>
          )}

          <div className={styles.container4}>{renderVideosByDate()}</div>
          
          {visibleVideosByDate < filteredVideosByDate.length ? (
            <div onClick={handleLoadMoreVideosByDate} className={styles.button1}>Next page</div>
          ) : (
            <div className={styles.button2}>Next page</div>
          )}
        </div>
      </div>
  
      <div className={styles.container2}>
        <div>Most popular videos:</div>
        <div className={styles.container3}>

          {visibleVideosByViewsMin > 0 ? (
          <div onClick={handleLoadLessVideosByViews} className={styles.button1}>Prev page</div>) : (
            <div className={styles.button2}>Prev page </div>
          )}
          
          <div className={styles.container4}>{renderVideosByViews()}</div>
          
          {visibleVideosByViews < filteredVideosByViews.length ? (
            <div onClick={handleLoadMoreVideosByViews} className={styles.button1}>Next page</div>
          ) : (
            <div className={styles.button2}>Next page</div>
          )}
        </div>
      </div>

      {userId == ownerId || isAdmin ? (<div className={styles.container2}>
        <div>Blocked videos:</div>
        <div className={styles.container3}>

          {visibleVideosBlockedMin > 0 ? (
            <div onClick={handleLoadLessVideosBlocked} className={styles.button1}>Prev page</div>
             ) : (
            <div className={styles.button2}>Prev page</div>
          )}

          <div className={styles.container4}>{renderVideosBlocked()}</div>
          
          {visibleVideosBlocked < filteredVideosBlocked.length ? (
            <div onClick={handleLoadMoreVideosBlocked} className={styles.button1}>Next page</div>
          ) : (
            <div className={styles.button2}>Next page</div>
          )}
        </div>
      </div>) : ('')}

      {userId == ownerId ? (<div className={styles.container2}>
        <div>Private videos:</div>
        <div className={styles.container3}>

          {visibleVideosPrivateMin > 0 ? (
            <div onClick={handleLoadLessVideosPrivate} className={styles.button1}>Prev page</div>
             ) : (
            <div className={styles.button2}>Prev page</div>
          )}

          <div className={styles.container4}>{renderVideosPrivate()}</div>
          
          {visibleVideosPrivate < filteredVideosPrivate.length ? (
            <div onClick={handleLoadMoreVideosPrivate} className={styles.button1}>Next page</div>
          ) : (
            <div className={styles.button2}>Next page</div>
          )}
        </div>
      </div>) : ('')}


    </div>
  );
}

export default SingleChannelVideos