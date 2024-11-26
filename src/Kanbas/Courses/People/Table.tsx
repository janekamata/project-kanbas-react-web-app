import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as usersClient from "../../Account/client";
import * as enrollmentsClient from "../../client";
import { setEnrollments } from "../../reducer";
import { setUsers } from "../../Account/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function PeopleTable() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const fetchUsers = async () => {
    const users = await usersClient.findAllUsers();
    dispatch(setUsers(users));
  };
  const fetchEnrollments = async () => {
    const enrollments = await enrollmentsClient.fetchAllEnrollments();
    dispatch(setEnrollments(enrollments));
  };
  useEffect(() => {
    fetchUsers();
    fetchEnrollments();
  }, []);

  return (
    <div id="wd-people-table" className="me-2">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user: any) =>
              enrollments.some(
                (enrollment: any) =>
                  enrollment.user === user._id && enrollment.course === cid
              )
            )
            .map((user: any) => (
              <tr>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
