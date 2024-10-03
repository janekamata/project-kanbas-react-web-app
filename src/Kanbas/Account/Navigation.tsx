import { Link } from "react-router-dom";
export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 me-2">
            <Link to={ `/Kanbas/Account/Signin` } className="list-group-item active border border-0 fs-5"> Signin  </Link>
            <Link to={ `/Kanbas/Account/Signup` } className="list-group-item text-danger border border-0 fs-5"> Signup  </Link>
            <Link to={ `/Kanbas/Account/Profile` } className="list-group-item text-danger border border-0 fs-5"> Profile </Link>
        </div>
    );
}
