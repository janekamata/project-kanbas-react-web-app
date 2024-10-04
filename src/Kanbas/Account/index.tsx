import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
export default function Account() {
    return (
        <div id="wd-account-screen">
            <div className="d-flex mt-2">
                <div className="d-none d-md-block me-2">
                    <AccountNavigation />
                </div>
                <div className="w-25 ms-2 mt-2" style={ { minWidth: "200px" } }>
                    <Routes>
                        <Route path="/"
                            element={ <Signin /> } />
                        <Route path="/Signin" element={ <Signin /> } />
                        <Route path="/Profile" element={ <Profile /> } />
                        <Route path="/Signup" element={ <Signup /> } />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
