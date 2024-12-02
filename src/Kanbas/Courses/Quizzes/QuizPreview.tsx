import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuiz } from "./reducer";
import { useState } from "react";
import ProtectedRouteRole from "../ProtectedRouteRole";
import QuizQuestion from "./QuizQuestion";

export default function QuizPreview() {
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
  const save = () => {
    console.log(quiz);
    dispatch(updateQuiz(quiz));
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };
  return (
    <ProtectedRouteRole>
      <div className="col col-lg-8 align-items-center justify-content-center ms-auto me-auto">
        <div>
          {quiz.questions.map((question: any) => (
            <QuizQuestion
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
        <button
          id="wd-quiz-save"
          className="btn btn-lg btn-danger me-1 float-end"
          onClick={save}
        >
          Submit Quiz
        </button>
        <Link to={`/Kanbas/Courses/${cid}/Quizzes`}>
          <button
            id="wd-quiz-cancel"
            className="btn btn-lg btn-secondary ms-4 me-1 float-end"
          >
            Cancel
          </button>
        </Link>
      </div>
    </ProtectedRouteRole>
  );
}
