import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import videosReduces from "./videoSlice";
import likeDislikeReducer from "./likeDislikeSlice";
import commentReducer from "./commentSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    videos: videosReduces,
    likeDislike: likeDislikeReducer,
    comments: commentReducer,
  },
});

export default store;
