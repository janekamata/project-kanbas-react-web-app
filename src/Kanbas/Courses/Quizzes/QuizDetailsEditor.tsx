import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Editor from "react-simple-wysiwyg";
import DOMPurify from "isomorphic-dompurify";
import * as coursesClient from "../client";
import {addQuiz, updateQuiz} from "./reducer";

export default function QuizDetailsEditor() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();

  const [quiz, setQuiz] = useState({
    _id: "",
    title: "Testing Nonempty Title",
    description: "",
    quizType: "Graded Quiz",
    assignmentGroup: "Assignments",
    shuffleAnswers: false,
    timeLimit: "",
    allowMultipleAttempts: false,
    assignTo: "Everyone",
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  const foundQuiz = quizzes.find((q: any) => q._id === qid);

  useEffect(() => {
    if (foundQuiz) {
      setQuiz(foundQuiz);
    }
  }, [foundQuiz]);

  const handleChange = (field: any, value: any) => {
    setQuiz({ ...quiz, [field]: value });
  };

  const handleSubmit = async () => {
    if (foundQuiz) {
      console.log("Updating Quiz");
      const updatedQuiz = await coursesClient.updateQuizForCourse(cid as string, quiz);
      dispatch(updateQuiz(updatedQuiz));
    } else {
      console.log("Creating New Quiz");
      const newQuiz = await coursesClient.createQuizForCourse(cid as string, quiz);
      dispatch(addQuiz(newQuiz));
    }
  };

  return (
    <div className="quiz-editor form-group p-4">
      <h2>{quiz.title || "Unnamed Quiz"}</h2>
      <label htmlFor="quiz-description" className="mt-3">
        Quiz Instructions:
      </label>
      <Editor
        id="quiz-description"
        className="form-control"
        value={quiz.description}
        onChange={(e) => handleChange("description", e.target.value)}
      />

      <div className="mt-4">
        <label htmlFor="quiz-type">Quiz Type</label>
        <select
          id="quiz-type"
          className="form-control"
          value={quiz.quizType}
          onChange={(e) => handleChange("quizType", e.target.value)}
        >
          <option value="Graded Quiz">Graded Quiz</option>
          <option value="Practice Quiz">Practice Quiz</option>
          <option value="Survey">Survey</option>
        </select>
      </div>

      <div className="mt-3">
        <label htmlFor="assignment-group">Assignment Group</label>
        <select
          id="assignment-group"
          className="form-control"
          value={quiz.assignmentGroup}
          onChange={(e) => handleChange("assignmentGroup", e.target.value)}
        >
          <option value="Assignments">Assignments</option>
          <option value="Exams">Exams</option>
        </select>
      </div>

      <div className="mt-3">
        <strong>Options</strong>
        <div className="form-check">
          <input
            id="shuffle-answers"
            type="checkbox"
            className="form-check-input"
            checked={quiz.shuffleAnswers}
            onChange={(e) => handleChange("shuffleAnswers", e.target.checked)}
          />
          <label htmlFor="shuffle-answers" className="form-check-label">
            Shuffle Answers
          </label>
        </div>
        <div className="form-check mt-2">
          <input
            id="time-limit"
            type="number"
            className="form-control"
            placeholder="Time Limit (minutes)"
            value={quiz.timeLimit}
            onChange={(e) => handleChange("timeLimit", e.target.value)}
          />
        </div>
        <div className="form-check mt-2">
          <input
            id="multiple-attempts"
            type="checkbox"
            className="form-check-input"
            checked={quiz.allowMultipleAttempts}
            onChange={(e) =>
              handleChange("allowMultipleAttempts", e.target.checked)
            }
          />
          <label htmlFor="multiple-attempts" className="form-check-label">
            Allow Multiple Attempts
          </label>
        </div>
      </div>

      <div className="mt-4">
        <h5>Assign</h5>
        <label htmlFor="assign-to">Assign To</label>
        <select
          id="assign-to"
          className="form-control"
          value={quiz.assignTo}
          onChange={(e) => handleChange("assignTo", e.target.value)}
        >
          <option value="Everyone">Everyone</option>
          <option value="Specific Group">Specific Group</option>
        </select>

        <div className="mt-3">
          <label htmlFor="due-date">Due</label>
          <input
            type="date"
            id="due-date"
            className="form-control"
            value={
              quiz.dueDate && new Date(quiz.dueDate).toISOString().split("T")[0]
            }
            onChange={(e) => handleChange("dueDate", e.target.value)}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="available-from">Available From</label>
          <input
            type="date"
            id="available-from"
            className="form-control"
            value={
              quiz.availableFrom &&
              new Date(quiz.availableFrom).toISOString().split("T")[0]
            }
            onChange={(e) => handleChange("availableFrom", e.target.value)}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="available-until">Available Until</label>
          <input
            type="date"
            id="available-until"
            className="form-control"
            value={
              quiz.availableUntil &&
              new Date(quiz.availableUntil).toISOString().split("T")[0]
            }
            onChange={(e) => handleChange("availableUntil", e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5">
        <Link to={`/Kanbas/Courses/${cid}/quizzes`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <button className="btn btn-danger" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}
