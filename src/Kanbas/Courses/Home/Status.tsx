import { FaCheckCircle, FaBan } from "react-icons/fa";
import { LuImport } from "react-icons/lu";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoHomeOutline, IoBarChartOutline, IoNotificationsOutline } from "react-icons/io5";
import { BsWindowFullscreen } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";


export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={ { width: "300px", marginLeft: 40 } }>
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <button className="btn btn-lg btn-secondary w-100 text-nowrap">
                        <FaBan className="me-2 fs-5" />Unpublish</button>
                </div>
                <div className="w-50">
                    <button className="btn btn-lg btn-success w-100">
                        <FaCheckCircle className="me-2 fs-5" />Publish</button>
                </div>
            </div><br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <LuImport className="me-2 fs-5" />Import Existing Content</button><br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" />Import from Commons</button><br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <IoHomeOutline className="me-2 fs-5" />Choose Home Page</button><br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BsWindowFullscreen className="me-2 fs-5" />View Course Stream</button><br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <TfiAnnouncement className="me-2 fs-5" />New Announcement</button><br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <IoBarChartOutline className=" me-2 fs-5" />New Analytics</button><br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <IoNotificationsOutline className="me-2 fs-5" />View Course Notifications</button>
        </div>
    );
}
