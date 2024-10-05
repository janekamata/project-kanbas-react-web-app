import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses" className="mt-4 mb-4">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={ { width: "300px" } }>
                        <div className="card rounded-3 overflow-hidden shadow-sm">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/web.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <a href="/Kanbas/Courses/1234/Home" className="text-decoration-none fw-bold">CS1234.F.24.1</a>
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text card-text">
                                        Full Stack Software Developer
                                    </p>
                                    <Link className="wd-dashboard-course-button"
                                        to="/Kanbas/Courses/1234/Home">
                                        <button className="btn btn-primary"> Go </button></Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "300px" } }>
                        <div className="card rounded-3 overflow-hidden shadow-sm">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/ds.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <a href="/Kanbas/Courses/1234/Home" className="text-decoration-none fw-bold">DS3000.F.24.2</a>
                                    <h5 className="wd-dashboard-course-title card-title">
                                        DS3000
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Foundations of Data Science
                                    </p>
                                    <Link className="wd-dashboard-course-button"
                                        to="/Kanbas/Courses/1234/Home">
                                        <button className="btn btn-primary"> Go </button></Link>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "300px" } }>
                        <div className="card rounded-3 overflow-hidden shadow-sm">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/mism.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <a href="/Kanbas/Courses/1234/Home" className="text-decoration-none fw-bold">MISM2510.F.24.5</a>
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MISM2510
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fundamentals of Information Analytics
                                    </p>
                                    <Link className="wd-dashboard-course-button"
                                        to="/Kanbas/Courses/1234/Home">
                                        <button className="btn btn-primary"> Go </button></Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "300px" } }>
                        <div className="card rounded-3 overflow-hidden shadow-sm">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/orgb.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <a href="/Kanbas/Courses/1234/Home" className="text-decoration-none fw-bold">ORGB3201.F.24.10</a>
                                    <h5 className="wd-dashboard-course-title card-title">
                                        ORGB3201
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Organizational Behavior
                                    </p>
                                    <Link className="wd-dashboard-course-button"
                                        to="/Kanbas/Courses/1234/Home">
                                        <button className="btn btn-primary"> Go </button></Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "300px" } }>
                        <div className="card rounded-3 overflow-hidden shadow-sm">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/phil.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <a href="/Kanbas/Courses/1234/Home" className="text-decoration-none fw-bold">PHIL1300.F.24.1</a>
                                    <h5 className="wd-dashboard-course-title card-title">
                                        PHIL1300
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Knowledge in a Digital World
                                    </p>
                                    <Link className="wd-dashboard-course-button"
                                        to="/Kanbas/Courses/1234/Home">
                                        <button className="btn btn-primary"> Go </button></Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "300px" } }>
                        <div className="card rounded-3 overflow-hidden shadow-sm">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/acct.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <a href="/Kanbas/Courses/1234/Home" className="text-decoration-none fw-bold">ACCT1201.F.24.11</a>
                                    <h5 className="wd-dashboard-course-title card-title">
                                        ACCT1201
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Financial Accounting & Reporting
                                    </p>
                                    <Link className="wd-dashboard-course-button"
                                        to="/Kanbas/Courses/1234/Home">
                                        <button className="btn btn-primary"> Go </button></Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "300px" } }>
                        <div className="card rounded-3 overflow-hidden shadow-sm">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/coop.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <a href="/Kanbas/Courses/1234/Home" className="text-decoration-none fw-bold">COOP3945.F.24.6</a>
                                    <h5 className="wd-dashboard-course-title card-title">
                                        COOP3945
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Co-op Work Experience
                                    </p>
                                    <Link className="wd-dashboard-course-button"
                                        to="/Kanbas/Courses/1234/Home">
                                        <button className="btn btn-primary"> Go </button></Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "300px" } }>
                        <div className="card rounded-3 overflow-hidden shadow-sm">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/is.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <a href="/Kanbas/Courses/1234/Home" className="text-decoration-none fw-bold">IS3500.F.24.8</a>
                                    <h5 className="wd-dashboard-course-title card-title">
                                        IS3500
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Information System Design & Development
                                    </p>
                                    <Link className="wd-dashboard-course-button"
                                        to="/Kanbas/Courses/1234/Home">
                                        <button className="btn btn-primary"> Go </button></Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
