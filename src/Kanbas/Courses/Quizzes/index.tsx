import { BsGripVertical } from "react-icons/bs";
import { MdOutlineQuiz } from "react-icons/md"; // Updated icon for quizzes
import QuizControlButtons from "./QuizControlButtons";
import QuizzesControls from "./QuizzesControls";
import QuizGroupControlButtons from "./QuizGroupControlButtons";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { deleteQuiz, setQuizzes } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
export default function Quizzes() {
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const [currentQuizId, setId] = useState("");
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const fetchQuizzes = async () => {
    const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };
  useEffect(() => {
    fetchQuizzes();
  }, []);
  const removeQuiz = async (quizId: string) => {
    await coursesClient.deleteQuiz(cid as string, quizId);
    dispatch(deleteQuiz(quizId));
  };

  return (
    <div id="wd-quizzes" className="me-2">
      <div className="row align-items-center mb-4">
        <QuizzesControls />
      </div>
      <ul className="list-group rounded-0 d-block">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            QUIZZES
            <QuizGroupControlButtons />
          </div>
          <ul id="wd-quiz-list" className="list-group rounded-0">
            {quizzes
              .filter((quiz: any) => quiz.course === cid)
              .map((quiz: any) => (
                <li className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineQuiz className="me-3 fs-5 text-success" />
                    <div className="d-flex flex-column">
                      {(currentUser.role === "FACULTY" ||
                        currentUser.role === "ADMIN") && (
                        <a
                          className="wd-quiz-link wd-title"
                          href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                        >
                          {quiz.title}
                        </a>
                      )}
                      {currentUser.role !== "FACULTY" &&
                        currentUser.role !== "ADMIN" && (
                          <span className="wd-title">{quiz.title}</span>
                        )}
                      <div className="wd-quiz-list-details">
                        <div>
                          {quiz.modules && (
                            <span className="text-danger">
                              {quiz.modules} &nbsp;&nbsp;| &nbsp;&nbsp;
                            </span>
                          )}
                          {quiz.available_date && (
                            <span>
                              <b>Not available until </b>
                              {new Date(quiz.available_date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  hour12: true,
                                }
                              )}
                              &nbsp;&nbsp;|&nbsp;&nbsp;
                            </span>
                          )}
                        </div>
                        {quiz.due_date && (
                          <span>
                            <b>Due </b>
                            {new Date(quiz.due_date).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                              }
                            )}
                            &nbsp;&nbsp;| &nbsp;&nbsp;
                          </span>
                        )}
                        {quiz.points && <span>{quiz.points} pts</span>}
                      </div>
                    </div>
                  </div>
                  <div>
                    <QuizControlButtons
                      quizId={quiz._id}
                      deleteQuiz={(quizId) => {
                        removeQuiz(quizId);
                      }}
                      editQuiz={(quizId) => {
                        setId(quizId);
                      }}
                    />
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
