import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import ProtectedRouteRole from "../ProtectedRouteRole";

export default function QuizControlButtons({
  quizId,
  deleteQuiz,
  editQuiz,
}: {
  quizId: string;
  deleteQuiz: (quizId: string) => void;
  editQuiz: (quizId: string) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="float-end">
      {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
        <span>
          <FaPencil
            onClick={() => editQuiz(quizId)}
            className="text-primary me-3"
          />
          <FaTrash
            className="text-danger position-relative me-3 fs-6"
            onClick={() => deleteQuiz(quizId)}
          />
        </span>
      )}
      <FaCheckCircle
        className="position-relative me-2 fs-5"
        style={{
          color: "green",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      />
      <ProtectedRouteRole>
        <BsPlus className="fs-3" />
      </ProtectedRouteRole>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
