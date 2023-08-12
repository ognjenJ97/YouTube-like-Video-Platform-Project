import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import AppAxios from "../apis/AppAxios";

//initial state
const initialState = {
    users: [],
    singleUser: null,
    singleUserLogIn: null,
    loading: false,
    totalPages: null,
    pageNo: 0,
    error: null
}

  //add new user
  export const addUser = createAsyncThunk(
    'user/addUser',
    async (userData, {dispatch, rejectWithValue }) => {
        try {

            var params = {
                username: userData.username,
                password: userData.password,
                repeatedPassword: userData.repeatedPassword,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email
            }

            await AppAxios.post('users', params);
            alert("Your registration is finish! Please log in to continue")

        } catch (error) {
            alert("Something went wrong" + error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
  )



//edit user 
export const editUser = createAsyncThunk(
    'user/editUser',
    async (updatedUser, { dispatch }) => {
      try {
        var params = {
            id: updatedUser.id,
            username: updatedUser.username,
            password: updatedUser.password,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            channelDescription: updatedUser.channelDescription,
            registrationDate: updatedUser.registrationDate,
            picture: updatedUser.picture,
            role: updatedUser.role,
            blocked: updatedUser.blocked,
            subscribers: updatedUser.subscribers,
            subscriptions: updatedUser.subscriptions,
            videos: updatedUser.videos,
        };

        await AppAxios.put('/users/' + updatedUser.id, params);
      } catch (error) {
        return isRejectedWithValue(error.response.data);
      }
    }
  );

//subscribe
export const subscribe = createAsyncThunk(
    'user/subscribe',
    async ({userId, channelId, pageNo}, { dispatch }) => {
      try {
        await AppAxios.post(`/users/${userId}/subscribe/${channelId}`);
        dispatch(fetchUsers({pageNo}));
        dispatch(fetchUserLogIn(window.localStorage.getItem('userId')))
      } catch (error) {
        return isRejectedWithValue(error.response.data);
      }
    }
  )

  //unsubscribe
export const unsubscribe = createAsyncThunk(
    'user/unsubscribe',
    async ({userId, channelId, pageNo}, { dispatch }) => {
      try {
        await AppAxios.post(`/users/${userId}/unsubscribe/${channelId}`);
        dispatch(fetchUsers({ pageNo }));
        dispatch(fetchUserLogIn(window.localStorage.getItem('userId')))
      } catch (error) {
        return isRejectedWithValue(error.response.data);
      }
    }
  )



//fetch one user 
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (userId, {dispatch}) => {
        try {
            const response = await AppAxios.get(`/users/${userId}`);
            return response.data;
        } catch (error) {
            console.log("Ipak je greska")
            throw new Error('Error occured. Please try again')
        }
    }
)

//fetch Log in user 
export const fetchUserLogIn = createAsyncThunk(
    'userLogIn/fetchUserLogIn',
    async (userId, {dispatch}) => {
        try {
            const response = await AppAxios.get(`/users/${userId}`);
            
            return response.data;
        } catch (error) {
            console.log("Ipak je greska - nema userId")
            throw new Error('Error occured. Please try again')
        }
    }
)


//fetching data 
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async ({ pageNo }, thunkAPI) => {
        try {
            const conf = {
                params: {
                  pageNo: pageNo
                },
              };
            const response = await AppAxios.get('/users', conf);
            const totalPages = response.headers['total-pages'];
            console.log(response.data);
            return {
                users: response.data,
                totalPages,
                pageNo: pageNo
            }
        } catch (error) {
            console.log("Ipak je greska")
            throw new Error('Error occured. Please try again')
        }
    }
)

//create Slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUserEmpty: (state, action) => {
            return {
                ...state,
                users: action.payload
            }
        },
        pageNoEmpty: (state, action) => {
            return {
                ...state,
                pageNo: action.payload
            }
        },
        clearSingleUser: (state) => {
            return {
                ...state,
                singleUser: null,
            };
        },
        clearSingleUserLogIn: (state) => {
            return {
                ...state,
                singleUserLogIn: null,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.users;
                state.pageNo = action.payload.pageNo;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.singleUser = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchUserLogIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserLogIn.fulfilled, (state, action) => {
                state.loading = false;
                state.singleUserLogIn = action.payload;
            })
            .addCase(fetchUserLogIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(subscribe.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(subscribe.fulfilled, (state) => {
                state.error = false;
            })
            .addCase(subscribe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(unsubscribe.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(unsubscribe.fulfilled, (state) => {
                state.error = false;
            })
            .addCase(unsubscribe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(editUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.loading = false;
                state.singleUserLogIn = action.payload;
            })
            .addCase(editUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }

})

export const { updateUserEmpty, clearSingleUser, pageNoEmpty, clearSingleUserLogIn } = usersSlice.actions;
export default usersSlice.reducer;
