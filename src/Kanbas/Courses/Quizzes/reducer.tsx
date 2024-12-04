import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";

const initialState = {
  quizzes: quizzes,
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    // Update a quiz in the state
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      );
    },
    // Add a new quiz to the state
    addQuiz: (state, { payload: quiz }) => {
      state.quizzes.push(quiz);
    },
    // Delete a quiz from the state
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((q: any) => q._id !== quizId);
    },
    // Replace the entire quizzes state with a new array
    setQuizzes: (state, { payload: quizzes }) => {
      state.quizzes = quizzes;
    },
  },
});

export const { updateQuiz, addQuiz, deleteQuiz, setQuizzes } =
  quizzesSlice.actions;

export default quizzesSlice.reducer;
