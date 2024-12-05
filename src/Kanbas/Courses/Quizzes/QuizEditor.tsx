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
import QuizDetailsEditor from "./QuizDetailsEditor";

export default function QuizEditor() {
  const { pathname } = useLocation();
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
      <div className="col col-lg-8 align-items-center justify-content-center ms-auto me-auto">
        <div className="d-flex align-items-center justify-content-center">
          <div className="fs-4 ms-auto">
            Points:{" "}
            {quiz.questions.reduce(
              (sumQuestions: any, question: { points: any }) =>
                sumQuestions + (question.points || 0),
              0,
              0
            )}
          </div>
          {pathname.includes("Questions") && (
            <button
              id="wd-add-question"
              className="btn btn-lg btn-secondary float-end ms-2"
              onClick={addQuestion}
            >
              <FaPlus className="position-relative me-2" />
              New Question
            </button>
          )}
          <button
            id="wd-add-question"
            className="btn btn-lg btn-secondary float-end ms-2"
            onClick={(e) =>
              navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`)
            }
          >
            Preview Quiz
          </button>
        </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              className={`nav-link  ${
                pathname.includes("Details") ? "active" : "text-danger"
              }`}
              aria-current="page"
              to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit/Details`}
            >
              Details
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link  ${
                pathname.includes("Questions") ? "active" : "text-danger"
              }`}
              aria-current="page"
              to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit/Questions`}
            >
              Questions
            </Link>
          </li>
        </ul>
        {pathname.includes("Questions") && (
          <div>
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
        )}
        {pathname.includes("Details") && <QuizDetailsEditor />}
      </div>
    </ProtectedRouteRole>
  );
}
