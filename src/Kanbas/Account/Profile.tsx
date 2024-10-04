import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input id="wd-username" value="jane" placeholder="username" className="form-control mb-2" />
            <input id="wd-password" value="123" placeholder="password"
                className="form-control mb-2" />
            <input id="wd-firstname" value="Jane" placeholder="First Name" className="form-control mb-2" />
            <input id="wd-lastname" value="Doe" placeholder="Last Name" className="form-control mb-2" />
            <input id="wd-dob" value="yyyy-mm-dd" type="date" className="form-control mb-2" />
            <input id="wd-email" value="jane@doe.mail" type="email" className="form-control mb-2" />
            <select id="wd-role" className="form-select mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">Sign out</Link>
        </div>
    );
}
