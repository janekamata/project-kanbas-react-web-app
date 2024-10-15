import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
    const courses = db.courses;
    const images = [
        { label: 1, path: "web"},
        { label: 2, path: "coop"},
        { label: 3, path: "ds"},
        { label: 4, path: "is"},
        { label: 5, path: "mism"},
        { label: 6, path: "orgb"},
        { label: 7, path: "phil"},
        { label: 8, path: "acct"},
        { label: 9, path: "coop"},
        { label: 0, path: "mism"},
      ];

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="mt-4 mb-4">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={ { width: "300px" } }>
                        <div className="card rounded-3 overflow-hidden shadow-sm">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to={`/Kanbas/Courses/${course._id}/Home`}>
                                <img src={`/images/${images[parseInt(course._id.slice(-1),10)].path}.jpg`} width="100%" height={ 160 } />
                                <div className="card-body">
                                    <a href={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none fw-bold">{course._id}.{course.number}.{course.startDate}</a>
                                    <h5 className="wd-dashboard-course-title card-title">
                                        {course.name}
                                    </h5> 
                                    <p className="wd-dashboard-course-title card-text card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                        {course.description}
                                    </p>
                                    <Link className="wd-dashboard-course-button"
                                        to={`/Kanbas/Courses/${course._id}/Home`}>
                                        <button className="btn btn-primary"> Go </button></Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
