import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import AppAxios from "../apis/AppAxios";
import { fetchVideo } from "./videoSlice";


//initial state
const initialLike = {
    likes: [],
    loading: false,
    error: null,
};

  //add new likeDislike

  export const addLikeDislike = createAsyncThunk(
    'likeDislike/addLikeDislike',
    async (newLike, {dispatch}) => {
        try {

            var params = {
                 userId: newLike.userId,
                 videoId: newLike.videoId,
                 commentId: newLike.commentId,
                 like: newLike.like
            }

            await AppAxios.post('likesdislikes', params);

        } catch (error) {
            return isRejectedWithValue(error.response.data);
        }
    }
  )

  //delete like
export const deleteLikeDislike = createAsyncThunk(
    'likeDislike/deleteLikeDislike',
    async ({userLikedDislikedId, videoId}, {dispatch}) => {
      try {
        await AppAxios.delete(`/likesdislikes/${userLikedDislikedId}`);
        dispatch(fetchVideo(videoId));
        console.log("Uspelo brisanje iz slajsa")
      } catch (error) {
        console.log("OVde je ipak greska neka")
        return isRejectedWithValue(error.response.data);
    }
  })



  //slice for likes 
const likeSlice = createSlice({
    name: 'likeDislike',
    initialState: initialLike,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addLikeDislike.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(addLikeDislike.fulfilled, (state, action) => {
              state.loading = false;
            })
            .addCase(addLikeDislike.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            })
            .addCase(deleteLikeDislike.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(deleteLikeDislike.fulfilled, (state, action) => {
              state.loading = false;
            })
            .addCase(deleteLikeDislike.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            })
            
    }
})

export const likeDislikeAction = { addLikeDislike, deleteLikeDislike };

export default likeSlice.reducer;