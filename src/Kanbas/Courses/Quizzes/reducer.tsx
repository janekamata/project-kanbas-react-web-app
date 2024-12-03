import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";
const initialState = {
  quizzes: quizzes,
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      ) as any;
    },
  },
});
export const { updateQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
