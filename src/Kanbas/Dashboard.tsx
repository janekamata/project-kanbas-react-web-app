import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/web.jpg" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Full Stack software developer
                    </p>
                    <Link className="wd-dashboard-course-button"
                        to="/Kanbas/Courses/1234/Home">
                        <button> Go </button><br /><br /></Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/ds.jpg" width={200} />
                        <div>
                            <h5>
                                DS3000
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Foundations of Data Science
                    </p>
                    <Link className="wd-dashboard-course-button"
                        to="/Kanbas/Courses/1234/Home">
                        <button> Go </button><br /><br /></Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/mism.jpg" width={200} />
                        <div>
                            <h5>
                                MISM2510
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Fundamentals of Information Analytics
                    </p>
                    <Link className="wd-dashboard-course-button"
                        to="/Kanbas/Courses/1234/Home">
                        <button> Go </button><br /><br /></Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/orgb.jpg" width={200} />
                        <div>
                            <h5>
                                ORGB3201
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Organizational Behavior
                    </p>
                    <Link className="wd-dashboard-course-button"
                        to="/Kanbas/Courses/1234/Home">
                        <button> Go </button><br /><br /></Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/phil.jpg" width={200} />
                        <div>
                            <h5>
                                PHIL1300
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Knowledge in a Digital World
                    </p>
                    <Link className="wd-dashboard-course-button"
                        to="/Kanbas/Courses/1234/Home">
                        <button> Go </button><br /><br /></Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/acct.jpg" width={200} />
                        <div>
                            <h5>
                                ACCT1201
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Financial Accounting & Reporting
                    </p>
                    <Link className="wd-dashboard-course-button"
                        to="/Kanbas/Courses/1234/Home">
                        <button> Go </button><br /><br /></Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/coop.jpg" width={200} />
                        <div>
                            <h5>
                                COOP3945
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Co-op Work Experience
                    </p>
                    <Link className="wd-dashboard-course-button"
                        to="/Kanbas/Courses/1234/Home">
                        <button> Go </button><br /><br /></Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/is.jpg" width={200} />
                        <div>
                            <h5>
                                IS3500
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Information System Design & Development
                    </p>
                    <Link className="wd-dashboard-course-button"
                        to="/Kanbas/Courses/1234/Home">
                        <button> Go </button><br /><br /></Link>
                </div>
            </div>
        </div>
    );
}
