import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentGroupControlButtons from "./AssignmentGroupControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments" className="me-2">
            <div className="row align-items-center mb-4">
                <AssignmentsControls />
            </div>
            <ul className="list-group rounded-0 d-block">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentGroupControlButtons />
                    </div>
                    <ul id="wd-assignment-list" className="list-group rounded-0">
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <MdOutlineAssignment className="me-3 fs-5 text-success" />
                                <div className="d-flex flex-column">
                                    <a className="wd-assignment-link wd-title" href="#/Kanbas/Courses/1234/Assignments/1231">
                                        A1 - ENV + HTML
                                    </a>
                                    <div className="wd-assignment-list-details">
                                        <div><span className="text-danger">Multiple Modules</span> &nbsp;&nbsp;| &nbsp;&nbsp;<b>Not available until</b> May 6 at 12:00am &nbsp;&nbsp;|&nbsp;&nbsp;</div>
                                        <span><b>Due</b> May 13 at 11:59pm &nbsp;&nbsp;| &nbsp;&nbsp;100 pts</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AssignmentControlButtons />
                            </div>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <MdOutlineAssignment className="me-3 fs-5 text-success" />
                                <div className="d-flex flex-column">
                                    <a className="wd-assignment-link wd-title" href="#/Kanbas/Courses/1234/Assignments/1231">
                                        A2 - CSS + Bootstrap
                                    </a>
                                    <div className="wd-assignment-list-details">
                                        <div><span className="text-danger">Multiple Modules</span>&nbsp;&nbsp; | &nbsp;&nbsp;<b>Not available until</b> May 13 at 12:00am &nbsp;&nbsp;|&nbsp;&nbsp;</div>
                                        <b>Due</b> May 20 at 11:59pm &nbsp;&nbsp;| &nbsp;&nbsp;100 pts
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AssignmentControlButtons />
                            </div>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <MdOutlineAssignment className="me-3 fs-5 text-success" />
                                <div className="d-flex flex-column">
                                    <a className="wd-assignment-link wd-title" href="#/Kanbas/Courses/1234/Assignments/1231">
                                        A3 - JavaScript + React
                                    </a>
                                    <div className="wd-assignment-list-details">
                                        <div><span className="text-danger">Multiple Modules</span> &nbsp;&nbsp;| &nbsp;&nbsp;<b>Not available until</b> May 20 at 12:00am &nbsp;&nbsp;|&nbsp;&nbsp;</div>
                                        <b>Due</b> May 27 at 11:59pm &nbsp;&nbsp;| &nbsp;&nbsp;100 pts
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AssignmentControlButtons />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
