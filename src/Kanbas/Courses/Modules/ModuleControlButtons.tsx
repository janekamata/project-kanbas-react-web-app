import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"
import { FaCheckCircle } from "react-icons/fa";
export default function LessonControlButtons() {
    return (
        <div className="float-end">
            <FaCheckCircle className="position-relative me-2 fs-5"
                style={ {
                    color: "green",
                    backgroundColor: "white",
                    borderRadius: "50%"
                } } />
            <BsPlus className="fs-3" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
