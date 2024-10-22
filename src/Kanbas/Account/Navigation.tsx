import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
    const { pathname } = useLocation();
    const links = ["Signin", "Signup", "Profile"];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 me-2">
            {links.map((link) => (
        <Link id={`wd-course-${link}-link`} to={link} className={`list-group-item border border-0 fs-5
              ${pathname.includes(link) ? "active" : "text-danger"}`}>
                {link}  
        </Link>
      ))}
        </div>
    );
}

