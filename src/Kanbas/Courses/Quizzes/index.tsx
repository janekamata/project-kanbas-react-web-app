import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { RxRocket } from "react-icons/rx";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import QuizControlButtons from "./QuizControlButtons";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import * as coursesClient from "../client"; // Updated client file
import { deleteQuiz, setQuizzes } from "./reducer";
import QuizGroupControlButtons from "./QuizGroupControlButtons";

// Define the quiz interface
interface Quiz {
  _id: string;
  title: string;
  course: string;
  availableFrom: string;
  availableUntil: string;
  dueDate: string;
  points: number;
  questions: { title: string; type: string; points: number }[];
  published: boolean;
  attempts?: { user: string; count: number }[]; // Optional for student attempts
}

export default function Quizzes() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const [currentQuizId, setId] = useState("");
  const dispatch = useDispatch();

  // Fetch quizzes for the current course
  const fetchQuizzes = async () => {
    try {
      const quizzes: Quiz[] = await coursesClient.findQuizzesForCourse(
        cid as string
      );
      dispatch(setQuizzes(quizzes));
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div id="wd-quizzes" className="m-5">
      <div id="wd-search-quizzes-box" className="row">
        <div className="col-8">
          <div className="search-bar me-2 mb-2 float-start d-flex align-items-center">
            <CiSearch className="position-relative m-2 fs-4" />
            <input
              id="wd-search-assignment"
              className="form-control border-0"
              placeholder="Search..."
            />
          </div>
        </div>
        {currentUser.role === "FACULTY" && (
          <div className="col-4">
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/edit/New`}>
              <button
                id="wd-add-quizzes"
                className="btn btn-lg btn-danger me-1 float-end"
              >
                <FaPlus
                  className="position-relative me-2"
                  style={{ bottom: "1px" }}
                />
                Quiz
              </button>
            </Link>
          </div>
        )}
      </div>
      <br />
      <br />
      <ul className="list-group rounded-0">
        <li className="list-group-item p-0 fs-5 border-gray">
          <div className="wd-title p-3 ps-3 bg-secondary">
            {currentUser.role === "FACULTY" && (
              <BsGripVertical className="me-2 fs-3" />
            )}
            QUIZZES
            <QuizGroupControlButtons />
          </div>
        </li>
        <ul id="wd-quizzes-list" className="list-group rounded-0">
          {quizzes
            .filter((quiz: Quiz) => quiz.course === cid)
            .map((quiz: Quiz) => (
              <li
                key={quiz._id}
                className="wd-quiz-list-item list-group-item p-3 ps-1 fs-5"
              >
                <div className="row align-items-center">
                  <div className="col-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <RxRocket className="fs-5 text-success" />
                  </div>
                  <div className="col-9">
                    <a
                      className="wd-quiz-link text-decoration-none text-dark h5"
                      href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                    >
                      {quiz.title}
                    </a>
                    <br />
                    <span className="fs-6 text-wrap">
                      <span className="custom-gray1">
                        <strong>Not available until</strong>{" "}
                        {quiz.availableFrom?.substring(0, 10)} at{" "}
                        {quiz.availableFrom?.substring(11, 16)} |{" "}
                        <strong>Due</strong> {quiz.dueDate?.substring(0, 10)} at{" "}
                        {quiz.dueDate?.substring(11, 16)} | {quiz.points} pts |{" "}
                        {quiz.questions.length} Questions
                      </span>
                    </span>
                  </div>
                  <div className="col-2">
                    {cid && <QuizControlButtons quiz={quiz} cid={cid} />}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </ul>
    </div>
  );
}
