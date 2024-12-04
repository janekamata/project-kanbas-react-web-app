import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function QuizDetails() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    let this_quiz = quizzes.find((quiz : {_id: string}) => quiz._id === qid);
    return (
        <div>
        <h3 className = "mt-2 mb-4 ms-3">{this_quiz.name}</h3>

        {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && <div>
        <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`}>
            <button className="btn btn-secondary me-2">Preview</button>
        </Link>
        <Link to={`/Kanbas/Courses/${cid}/Quizzes/edit/${qid}`}>
            <button className="btn btn-secondary">Edit</button>
        </Link><hr/>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Quiz Type</strong></span></div>
            <div className="col-9">Graded Quiz</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Points</strong></span></div>
            <div className="col-9">29</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Assignment Group</strong></span></div>
            <div className="col-9">QUIZZES</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Shuffle Answers</strong></span></div>
            <div className="col-9">No</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Time Limit</strong></span></div>
            <div className="col-9">30 minutes</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Multiple Attempts</strong></span></div>
            <div className="col-9">No</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>How Many Attempts</strong></span></div>
            <div className="col-9">1</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Show Correct Answers</strong></span></div>
            <div className="col-9">Immediately</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Access Code</strong></span></div>
            <div className="col-9"></div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>One Question at a Time</strong></span></div>
            <div className="col-9">Yes</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Webcam Required</strong></span></div>
            <div className="col-9">No</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Lock Questions after Answering</strong></span></div>
            <div className="col-9">No</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Due</strong></span></div>
            <div className="col-9"><strong>{this_quiz.dueDate && this_quiz.dueDate.substring(0, 10)}
                </strong> at <strong>{this_quiz.dueDate && this_quiz.dueDate.substring(11, 16)}</strong></div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Available</strong></span></div>
            <div className="col-9">from <strong>{this_quiz.dateAvailable && this_quiz.dateAvailable.substring(0, 10)}
                </strong> at <strong>{this_quiz.dateAvailable && this_quiz.dateAvailable.substring(11, 16)}
                </strong> until <strong>{this_quiz.dateUnavailable && this_quiz.dateUnavailable.substring(0, 10)}
                </strong> at <strong>{this_quiz.dateUnavailable && this_quiz.dateUnavailable.substring(11, 16)}</strong></div>
        </div></div>}
        {!(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && <div><button className="btn btn-danger ms-3">Begin Quiz</button></div>}
        </div>
    )
}