import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
    const { cid } = useParams();
    const modules = db.modules;

    return (
        <div>
            <div className="row mb-2">
                <ModulesControls />
            </div>
            <ul id="wd-modules" className="list-group rounded-0 d-block">
                {
                    modules.filter( ( module: any ) => module.course === cid ).map( ( module: any ) => (
                        <li className="wd-module list-group-item p-0 mb-4 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <span>{ module.name }</span>
                                </div>
                                <ModuleControlButtons />
                            </div>
                            {
                                module.lessons && (
                                    <ul className="wd-lessons list-group rounded-0">
                                        { module.lessons.map( ( lesson: any ) => (
                                            <li className="wd-lesson list-group-item p-3 ps-1">
                                                <BsGripVertical className="me-2 fs-3" />
                                                <span className="wd-title">{lesson.name}</span>
                                                <LessonControlButtons />
                                            </li>
                                        ) ) }
                                    </ul>
                                )
                            }
                        </li>
                    ) )
                }
            </ul>
        </div >
    );
}
