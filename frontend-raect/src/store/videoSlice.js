import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import AppAxios from "../apis/AppAxios";


//initial state
const initialState = {
    videos: [],
    videosBlocked: [],
    singleVideo: null,
    loading: false,
    loadingSingle: false,
    totalPages: null,
    pageNo: 0,
    error: null
}


//new view for a video
export const newView = createAsyncThunk(
    'video/newView',
    async (videoId, { dispatch }) => {
      try {
        const response = await AppAxios.get(`/videos/${videoId}/view`);
        return response.data;
      } catch (error) {
        throw new Error('Error occurred while updating view count');
      }
    }
  );

  //add new video
  export const addVideo = createAsyncThunk(
    'video/addVideo',
    async (userData, {dispatch}) => {
        try {

            var params = {
                ownerId: userData.ownerId,
                title: userData.title,
                videoUrl: userData.videoUrl,
                thumbnailUrl: userData.thumbnailUrl,
                description: userData.description
            }

            await AppAxios.post('videos', params);

        } catch (error) {
            alert("Your uploading is not finish!")
            return isRejectedWithValue(error.response.data);
        }
    }
  )

//delete video
export const deleteVideo = createAsyncThunk(
    'video/deleteVideo',
    async (id, {dispatch}) => {
      try {
        await AppAxios.delete(`/videos/${id}`);
        alert("You deleted video!")
      } catch (error) {
        alert("Error with delete function")
        return isRejectedWithValue(error.response.data);
    }
  })


//edit video 
export const editVideo = createAsyncThunk(
    'video/editVideo',
    async ({updateVideo}, { dispatch }) => {
      try {
  
        var params = {
            id: updateVideo.id,
            title: updateVideo.title,
            videoUrl: updateVideo.videoUrl,
            thumbnailUrl: updateVideo.thumbnailUrl,
            description: updateVideo.description,
            visibility: updateVideo.visibility,
            allowComments: updateVideo.allowComments,
            showRatings: updateVideo.showRatings,
            blocked: updateVideo.blocked,
            views: updateVideo.views,
            creationDate: updateVideo.creationDate,
            ownerId: updateVideo.ownerId,
            ownerUsername: updateVideo.ownerUsername,
            comments: updateVideo.comments,
            likedDislikedVideos: updateVideo.likedDislikedVideos,
        };

        console.log("OVO SU PARAMETRI")
        console.log(params)
        await AppAxios.put('/videos/' + updateVideo.id, params);
        dispatch(clearSingleVideo(updateVideo.id))
        dispatch(fetchVideo(updateVideo.id))
      } catch (error) {
        return isRejectedWithValue(error.response.data);
      }
    }
  );

//init empty search
export const empty_search = {
    title: '',
    sort: 2
  };


//fetch one video 
export const fetchVideo = createAsyncThunk(
    'video/fetchVideo',
    async (videoId, {dispatch}) => {
        try {
            const response = await AppAxios.get(`/videos/${videoId}`);
            console.log("Ovo su podaci iz FETCH VIDEO:")
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log("Ipak je greska - jedan video")
            throw new Error('Error occured. Please try again')
        }
    }
)

//fetch one video 
export const fetchVideosBlocked = createAsyncThunk(
    'videosBlocked/fetchVideosBlocked',
    async ({dispatch}) => {
        console.log("USLO SE U ZAHTEV ali ne u try")
        try {
            console.log("USLO SE U ZAHTEV")
            const response = await AppAxios.get(`/videos/blocked`);
            console.log("Ovo su podaci iz FETCH VIDEO BLOCKED:")
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log("Ipak je greska - blocked videos")
            throw new Error('Error occured. Please try again')
        }
    }
)

//fetching data 
export const fetchVideos = createAsyncThunk(
    'videos/fetchVideos',
    async ({ pageNo }, thunkAPI) => {
      try {
        console.log("OVO JE PAGE NO U FETCH VIDEOS")
        const state = thunkAPI.getState();
        const conf = {
          params: {
            title: state.videos.title,
            sortOrder: state.videos.sort,
            pageNo: pageNo
          },
        };
        console.log(conf);
        if (pageNo === 0) {
          thunkAPI.dispatch(clearVideoList([])); 
        }
        const response = await AppAxios.get('/videos', conf);
        const totalPages = response.headers['total-pages'];
        console.log("OVO JE IZ FETCH VIDEO LISTE CELA LISTA")
        console.log(response.data);
        return {
          videos: response.data,
          totalPages,
          pageNo: pageNo
        }
      } catch (error) {
        console.log("Ipak je greska - video ")
        throw new Error('Error occurred. Please try again')
      }
    }
  )

//create Slice
const videoSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        updateSort: (state, action) => {
            return {
                ...state,
                videos: [], 
                sort: action.payload,
            };

        },
        updateText: (state, action) => {
            return {
                ...state,
                videos: [], 
                title: action.payload,
            };
        },
        updatePageNo: (state, action) => {
            return {
                ...state,
                videos: [],
                pageNo: action.payload,
            }
        },
        restartParams: (state, action) => {
            return {
                ...state,
                videos: [],
                pageNo: 0,
                sort: 2,
                title: ''
            }
        },
        clearSingleVideo: (state) => {
            return {
                ...state,
                singleVideo: null,
            };
        },

        clearVideoList: (state, action) => {
            return {
                ...state,
                videos: action.payload,
            };
        },
        clearVideoListBlocked: (state, action) => {
            return {
                ...state,
                videosBlocked: action.payload,
            };
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = [...state.videos, ...action.payload.videos];
                state.pageNo = action.payload.pageNo;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchVideo.pending, (state) => {
                state.loadingSingle = true;
                state.error = null;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.loadingSingle = false;
                state.singleVideo = action.payload
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.loadingSingle = false;
                state.error = action.error.message;
            })
            .addCase(editVideo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editVideo.fulfilled, (state, action) => {
                state.loading = false;
                state.singleVideo = action.payload;
            })
            .addCase(editVideo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteVideo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteVideo.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(deleteVideo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(newView.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(newView.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(newView.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchVideosBlocked.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVideosBlocked.fulfilled, (state, action) => {
                state.loading = false;
                state.videosBlocked = action.payload.videosBlocked;
            })
            .addCase(fetchVideosBlocked.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }

})

export const { clearVideoListBlocked, clearVideoList, updateSort, updateText, updatePageNo, restartParams, clearSingleVideo } = videoSlice.actions;
export default videoSlice.reducer;
