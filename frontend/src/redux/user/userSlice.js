// redux/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  listings: [], 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    likeListingSuccess: (state, action) => {
      const index = state.listings.findIndex(listing => listing._id === action.payload._id);
      if (index !== -1) {
        state.listings[index] = action.payload;
      }
    },
    unlikeListingSuccess: (state, action) => {
      const index = state.listings.findIndex(listing => listing._id === action.payload._id);
      if (index !== -1) {
        state.listings[index] = action.payload;
      }
    },
    likeUnlikeFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserSuccess,
  updateUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signOutUserFailure,
  signOutUserSuccess,
  signOutUserStart,
  likeListingSuccess,
  unlikeListingSuccess,
  likeUnlikeFailure,
} = userSlice.actions;

export const likeListing = (listingId) => async (dispatch, getState) => {
  try {
    const { user: { currentUser } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`,
      },
    };
    const { data } = await axios.put(`/api/listing/like`, { _id: listingId }, config);
    dispatch(likeListingSuccess(data));
  } catch (error) {
    dispatch(likeUnlikeFailure(error.response?.data?.message || error.message));
  }
};

export const unlikeListing = (listingId) => async (dispatch, getState) => {
  try {
    const { user: { currentUser } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`,
      },
    };
    const { data } = await axios.put(`/api/listing/unlike`, { _id: listingId }, config);
    dispatch(unlikeListingSuccess(data));
  } catch (error) {
    dispatch(likeUnlikeFailure(error.response?.data?.message || error.message));
  }
};

export default userSlice.reducer;
