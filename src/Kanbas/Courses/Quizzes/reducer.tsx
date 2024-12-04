import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";
const initialState = {
  quizzes: quizzes,
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, { payload: quiz }) => {
      if (quiz.title.startsWith("@")) {
          return;
      } 
    const newQuiz: any = {
      _id: new Date().getTime().toString(),
      title: quiz.title,
      course: quiz.course,
      dateAvailable: quiz.dateAvailable,
      timeAvailable: quiz.timeAvailable,
      dueDate: quiz.dueDate,
      dueTime: quiz.dueTime,
      points: quiz.points,
      description: quiz.description
    };
    state.quizzes = [...state.quizzes, newQuiz] as any;
  },
  deleteQuiz: (state, { payload: quiz }) => {
    state.quizzes = state.quizzes.filter(
      (a: any) => a._id !== quiz._id);
  },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      ) as any;
    },
    publish: (state, {payload: quiz}) => {
      state.quizzes = state.quizzes.map((q) => {return q._id === quiz._id ? {...quiz, published: true} : q})
    },
    unPublish: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q) =>
          q._id === quiz._id ? {...quiz, published: false} : q
      )
  }
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, publish, unPublish } = quizzesSlice.actions;
export default quizzesSlice.reducer;
