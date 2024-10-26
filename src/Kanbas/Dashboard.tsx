import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as db from "./Database";
export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const initialCourse = {
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  };
  const [course, setCourse] = useState<any>(initialCourse);

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    setCourse(initialCourse);
  };

  const images = [
    { label: 1, path: "web" },
    { label: 2, path: "coop" },
    { label: 3, path: "ds" },
    { label: 4, path: "is" },
    { label: 5, path: "mism" },
    { label: 6, path: "orgb" },
    { label: 7, path: "phil" },
    { label: 8, path: "acct" },
    { label: 9, path: "coop" },
    { label: 0, path: "mism" },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <div>
        <div className="row align-items-center mb-2">
          <h5 className="col mb-0 d-flex align-items-center">
            New Course
            <button
              className="btn btn-warning me-2 ms-auto"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
            <button
              className="btn btn-primary"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
          </h5>
        </div>

        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control mb-2"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <div className="row">
          <div className="col-md-4">
            <label
              htmlFor="new-course-number"
              className="col-mb-2 col-form-label"
            >
              Course Number
            </label>
            <input
              id="new-course-number"
              value={course.number}
              className="form-control mb-2"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <label
              htmlFor="new-course-start"
              className="col-mb-2 col-form-label"
            >
              Start Date
            </label>
            <input
              id="new-course-start"
              value={course.startDate}
              type="date"
              className="form-control mb-2"
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="new-course-end" className="col-mb-2 col-form-label">
              End Date
            </label>
            <input
              id="new-course-end"
              value={course.endDate}
              type="date"
              className="form-control"
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="mt-4 mb-4">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden shadow-sm ">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark "
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  <img
                    src={`/images/${
                      images[parseInt(course._id.slice(-1), 10)].path
                    }.jpg`}
                    width="100%"
                    height={160}
                  />
                  <div className="card-body ">
                    <a
                      href={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-title-number text-decoration-none fw-bold"
                    >
                      {course._id}.{course.number}.{course.startDate}
                    </a>
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <Link
                      className="wd-dashboard-course-button"
                      to={`/Kanbas/Courses/${course._id}/Home`}
                    >
                      <button className="btn btn-primary"> Go </button>
                    </Link>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </button>
                    <button
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
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
