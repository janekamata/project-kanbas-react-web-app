import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function QuizDetails() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  let this_quiz = quizzes.find((quiz: { _id: string }) => quiz._id === qid);
  return (
    <div>
      <h3 className="mt-2 mb-4 ms-3">{this_quiz.title}</h3>

      {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
        <div>
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`}>
            <button className="btn btn-secondary me-2">Preview</button>
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit/Details`}>
            <button className="btn btn-secondary">Edit</button>
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Review`}>
            <button className="btn btn-secondary ms-2">
              Review Last Attempt
            </button>
          </Link>
          <hr />
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Quiz Type</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.quizType}</div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Points</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.points}</div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Assignment Group</strong>
              </span>
            </div>
            <div className="col-9">
              {this_quiz.assignmentGroup.toUpperCase()}
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Shuffle Answers</strong>
              </span>
            </div>
            <div className="col-9">
              {this_quiz.shuffleAnswers ? "Yes" : "No"}
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Time Limit</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.timeLimit} minutes</div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Multiple Attempts</strong>
              </span>
            </div>
            <div className="col-9">
              {this_quiz.multipleAttempts ? "Yes" : "No"}
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>How Many Attempts</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.maxAttempts}</div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Show Correct Answers</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.showCorrectAnswers}</div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Access Code</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.accessCode}</div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>One Question at a Time</strong>
              </span>
            </div>
            <div className="col-9">
              {this_quiz.oneQuestionAtATime ? "Yes" : "No"}
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Webcam Required</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.webcam ? "Yes" : "No"}</div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Lock Questions after Answering</strong>
              </span>
            </div>
            <div className="col-9">
              {this_quiz.lockQuestions ? "Yes" : "No"}
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Due</strong>
              </span>
            </div>
            <div className="col-9">
              <strong>
                {this_quiz.dueDate &&
                  new Date(this_quiz.dueDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
              </strong>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="float-end">
                <strong>Available</strong>
              </span>
            </div>
            <div className="col-9">
              from&nbsp;
              <strong>
                {this_quiz.availableFrom &&
                  new Date(this_quiz.availableFrom).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }
                  )}
              </strong>
              &nbsp;until
              <strong>
                &nbsp;
                {this_quiz.availableUntil &&
                  new Date(this_quiz.availableUntil).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }
                  )}
              </strong>
            </div>
          </div>
        </div>
      )}
      {currentUser.role === "STUDENT" && (
        <div>
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Attempt`}>
            <button className="btn btn-danger ms-3">Begin Quiz</button>
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Review`}>
            <button className="btn btn-secondary ms-3">
              Review Last Attempt
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
