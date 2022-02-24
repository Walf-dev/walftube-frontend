import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../utils";

export const getVideo = createAsyncThunk("video/getVideo", async (videoId) => {
  const { data: video } = await client(
    `${process.env.REACT_APP_BE}/videos/${videoId}`
  );
  return video;
});

const videoSlice = createSlice({
  name: "slice",
  initialState: {
    isFetching: true,
    data: {},
  },
  reducers: {
    clearVideo(state, action) {
      state.isFetching = true;
      state.data = {};
    },
    removeVideo(state, action) {
      state.data = {
        ...state.data,//copying the original state
        videos: [action.payload],//new videos array
      };
    },
    addComment(state, action) {
      state.data = {
        ...state.data,//copying the original state
        comments: [action.payload, ...state.data.comments],//new comments array
      };
    },
    like(state, action) {
      state.data = {
        ...state.data,
        isLiked: !state.data.isLiked,
        likesCount: state.data.likesCount + 1,
      };
    },
    dislike(state, action) {
      state.data = {
        ...state.data,
        isDisliked: !state.data.isDisliked,
        dislikesCount: state.data.dislikesCount + 1,
      };
    },
    cancelLike(state, action) {
      state.data = {
        ...state.data,
        isLiked: !state.data.isLiked,
        likesCount: state.data.likesCount - 1,
      };
    },
    cancelDislike(state, action) {
      state.data = {
        ...state.data,
        isDisliked: !state.data.isDisliked,
        dislikesCount: state.data.dislikesCount - 1,
      };
    },
    subscribeFromVideo(state, action) {
      state.data = {
        ...state.data,
        isSubscribed: !state.data.isSubscribed,
      };
    },
    unsubscribeFromVideo(state, action) {
      state.data = {
        ...state.data,
        isSubscribed: !state.data.isSubscribed,
      };
    },
  },
  extraReducers: {
    [getVideo.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
    },
  },
});

export const {
  clearVideo,
  addComment,
  like,
  dislike,
  cancelLike,
  cancelDislike,
  subscribeFromVideo,
  unsubscribeFromVideo,
  removeVideo,
} = videoSlice.actions;

export default videoSlice.reducer;
