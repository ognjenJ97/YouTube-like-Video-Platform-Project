import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import AppAxios from "../apis/AppAxios";
import { fetchVideo } from "./videoSlice";

//initial state
const initialLike = {
    comments: [],
    loading: false,
    error: null,
};



  //add new likeDislike
  export const addComment = createAsyncThunk(
    'comment/addComment',
    async (newComment, {dispatch}) => {
        try {

            var params = {
                content: newComment.content,
                ownerId: newComment.ownerId,
                videoId: newComment.videoId
            }

            await AppAxios.post('comments', params);

        } catch (error) {
            return isRejectedWithValue(error.response.data);
        }
    }
  )

  //delete pet
export const deleteComment = createAsyncThunk(
    'comment/deleteComment',
    async ({commentId, videoId}, {dispatch}) => {
      try {
        await AppAxios.delete(`/comments/${commentId}`);
        dispatch(fetchVideo(videoId));
      } catch (error) {
        return isRejectedWithValue(error.response.data);
    }
  })

  //slice for likes 
const commentSlice = createSlice({
    name: 'comments',
    initialState: initialLike,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addComment.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(addComment.fulfilled, (state, action) => {
              state.loading = false;
            })
            .addCase(addComment.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            })
            .addCase(deleteComment.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
              state.loading = false;
            })
            .addCase(deleteComment.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            })
            
    }
})

export const commentAction = { addComment, deleteComment };

export default commentSlice.reducer;