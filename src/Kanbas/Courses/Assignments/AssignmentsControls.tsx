import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap">
            <div className="search-bar me-2 mb-2 float-start d-flex align-items-center">
                <CiSearch className="position-relative m-2 fs-4" />
                <input id="wd-search-assignment" className="form-control border-0"
                    placeholder="Search..."></input>
            </div>
            <div className="row float-end">
                <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary mb-2 me-2 float-end col">
                    <FaPlus className="position-relative me-2" />
                    Group
                </button>
                <button id="wd-add-assignment" className="btn btn-lg btn-danger  me-2 mb-2 float-end col text-nowrap">
                    <FaPlus className="position-relative me-2" />
                    Assignment
                </button>
            </div>
        </div>
    );
}