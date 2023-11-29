import { createSlice } from "@reduxjs/toolkit";

const updateCommentInLocalStorage = (newComment) => {
    localStorage.setItem('comment', JSON.stringify(newComment));
  };

const CommentSlice = createSlice({
  name: "comment",
  initialState: { data: [] },
  reducers: {
    setComment: (state, actions) => {
      state.data.push(actions.payload);
      updateCommentInLocalStorage(state.data);
    },
  },
});

export const carsSliceAction = CommentSlice.actions;
export const carsSliceReducer = CommentSlice.reducer;
