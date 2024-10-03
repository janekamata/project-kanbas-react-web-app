import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{ " " }
                        <span className="wd-last-name">Stark</span></td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td> </tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Michelle</span>{ " " }
                        <span className="wd-last-name">Wu</span></td>
                        <td className="wd-login-id">101134771S</td>
                        <td className="wd-section">S301</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2021-10-11</td>
                        <td className="wd-total-activity">09:11:32</td> </tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Lady</span>{ " " }
                        <span className="wd-last-name">Gaga</span></td>
                        <td className="wd-login-id">011122331S</td>
                        <td className="wd-section">S105</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2018-02-05</td>
                        <td className="wd-total-activity">12:30:32</td> </tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Albus</span>{ " " }
                        <span className="wd-last-name">Dumbledore</span></td>
                        <td className="wd-login-id">002214789T</td>
                        <td className="wd-section">S190</td>
                        <td className="wd-role">INSTRUCTOR</td>
                        <td className="wd-last-activity">2022-11-06</td>
                        <td className="wd-total-activity">02:19:22</td> </tr>
                </tbody>
            </table>
        </div> );
}