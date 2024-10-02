import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
    return (
        <div>
            <div className="row">
                <ModulesControls />
            </div>
            <ul id="wd-modules" className="list-group rounded-0 d-block">
                <li className="wd-module list-group-item p-0 mb-1 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <span>Week 1</span>
                        </div>
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title">READINGS</span>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title">SLIDES</span>
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li><br />
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title wd-title p-3 ps-2 bg-secondary">Week 2</div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title">SLIDES</span>
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul>
        </div >
    );
}
