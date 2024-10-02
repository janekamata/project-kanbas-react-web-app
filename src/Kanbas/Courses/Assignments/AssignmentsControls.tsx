import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function ModulesControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <div className="search-bar me-1 float-start d-flex align-items-center">
                <CiSearch className="position-relative m-2 fs-4" />
                <input id="wd-search-assignment" className="form-control border-0"
                    placeholder="Search..."></input>
            </div>

            <button id="wd-add-assignment" className="btn btn-lg btn-danger  me-1 float-end">
                <FaPlus className="position-relative me-2" />
                Assignment
            </button>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" />
                Group
            </button>
        </div >
    );
}