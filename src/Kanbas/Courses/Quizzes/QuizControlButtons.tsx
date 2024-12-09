import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsBanFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteQuiz, publish, unPublish, updateQuiz } from "./reducer";
import * as coursesClient from "../client";
import { useState } from "react";
export default function QuizControlButtons({
  quiz,
  cid,
}: {
  quiz: any;
  cid: string;
}) {
  const dispatch = useDispatch();
  const [published, setPublished] = useState(quiz.published);
  return (
    <div className="float-end">
      {published && (
        <span
          onClick={async () => {
            const updatedQuiz = await coursesClient.updateQuizForCourse(
              cid as string,
              { ...quiz, published: false }
            );
            dispatch(updateQuiz(updatedQuiz));
            setPublished(false);
          }}
        >
          <GreenCheckmark />
        </span>
      )}
      {!published && (
        <BsBanFill
          className="text-danger me-1 mt-1 fs-5"
          onClick={async () => {
            const updatedQuiz = await coursesClient.updateQuizForCourse(
              cid as string,
              { ...quiz, published: true }
            );
            dispatch(updateQuiz(updatedQuiz));
            setPublished(true);
          }}
        />
      )}

      <div className="dropdown float-end">
        <IoEllipsisVertical
          className="fs-4 dropdown-toggle no-shift"
          data-bs-toggle="dropdown"
        />
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item me-0"
              href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/Edit/Details`}
            >
              Edit
            </a>
          </li>
          <li>
            <button
              className="dropdown-item me-0"
              onClick={() => {
                coursesClient.deleteQuiz(cid, quiz._id);
                dispatch(deleteQuiz(quiz));
              }}
            >
              Delete
            </button>
          </li>
          <li>
            {published && (
              <button
                className="dropdown-item me-0"
                onClick={async () => {
                  const updatedQuiz = await coursesClient.updateQuizForCourse(
                    cid as string,
                    { ...quiz, published: false }
                  );
                  dispatch(updateQuiz(updatedQuiz));
                  setPublished(false);
                }}
              >
                Unpublish
              </button>
            )}
            {!published && (
              <button
                className="dropdown-item me-0"
                onClick={async () => {
                  const updatedQuiz = await coursesClient.updateQuizForCourse(
                    cid as string,
                    { ...quiz, published: true }
                  );
                  dispatch(updateQuiz(updatedQuiz));
                  setPublished(true);
                }}
              >
                Publish
              </button>
            )}
          </li>
          <li>
            <button className="dropdown-item me-0">Copy</button>
          </li>
          <li>
            <button className="dropdown-item me-0">Sort</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
