import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
  useNavigate,
} from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuiz } from "./reducer";
import { useState } from "react";
import ProtectedRouteRole from "../ProtectedRouteRole";
import { FaPlus } from "react-icons/fa";
import QuestionEditor from "./QuestionEditor";

export default function QuizEditor() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();
  const [quiz, setQuiz] = useState(
    quizzes.find((quiz: { _id: string | undefined }) => quiz._id === qid) ?? {
      name: "",
      course: cid,
      description: "",
      questions: [],
    }
  );
  const navigate = useNavigate();
  const addQuestion = () => {
    const newQuestion: any = {
      _id: new Date().getTime().toString(),
      quiz: qid,
      type: "Multiple Choice",
      choice: [],
      edit: true,
    };
    setQuiz({ ...quiz, questions: [...quiz.questions, newQuestion] });
  };
  const save = () => {
    console.log(quiz);
    dispatch(updateQuiz(quiz));
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };
  return (
    <ProtectedRouteRole>
      <div>
        <div className="d-flex align-items-center">
          <div className="fs-4">
            Points:{" "}
            {quiz.questions.reduce(
              (sumQuestions: any, question: { points: any }) =>
                sumQuestions + (question.points || 0),
              0,
              0
            )}
          </div>
          <button
            id="wd-add-question"
            className="btn btn-lg btn-secondary float-end ms-auto"
            onClick={addQuestion}
          >
            <FaPlus className="position-relative me-2" />
            New Question
          </button>
        </div>
        <div>
          {quiz.questions.map((question: any) => (
            <QuestionEditor
              question={question}
              updateQuestion={(question) => {
                setQuiz({
                  ...quiz,
                  questions: quiz.questions.map((q: { _id: string }) =>
                    q._id === question._id ? question : q
                  ),
                });
              }}
            />
          ))}
        </div>
        <hr />
        <Link to={`/Kanbas/Courses/${cid}/Quizzes`}>
          <button
            id="wd-quiz-cancel"
            className="btn btn-lg btn-secondary ms-4 me-1 float-start"
          >
            Cancel
          </button>
        </Link>
        <button
          id="wd-quiz-save"
          className="btn btn-lg btn-danger me-1 float-start"
          onClick={save}
        >
          Save
        </button>
      </div>
    </ProtectedRouteRole>
  );
}
