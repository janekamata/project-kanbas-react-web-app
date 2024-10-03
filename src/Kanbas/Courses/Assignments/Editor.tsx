export default function AssignmentEditor() {
    return (
        <form id="wd-assignments-editor" className="g-3">
            <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
            <input id="wd-name" className="form-control mb-3" value="A1 - ENV + HTML" />
            <textarea id="wd-description" className="form-control mb-3">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <div className="row mb-3">
                <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">Points</label>
                <div className="col">
                    <input id="wd-points" className="form-control" value={ 100 } />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="wd-group" className="col-sm-2 col-form-label text-end">Assignment Group</label>
                <div className="col">
                    <select id="wd-group" className="form-select">
                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECT">PROJECT</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label text-end">Display Grade as</label>
                <div className="col">
                    <select id="wd-display-grade-as" className="form-select">
                        <option selected value="Percentage">Percentage</option>
                        <option value="Points">Points</option>
                    </select>
                </div>
            </div>
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0 text-end">Submission Type</legend>

                <div className="col">
                    <div className="border rounded p-3">
                        <div>
                            <select id="wd-submission-type" className="form-select mb-3">
                                <option selected value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>
                        <legend className="form_input_header_label col-form-label col-sm-3 pt-0">Online Entry Options</legend>
                        <div className="form-check">
                            <input type="checkbox" name="check-online-option" className="form-check-input" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry" className="form-check-label ms-2">Text Entry</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="check-online-option" className="form-check-input" id="wd-website-url" />
                            <label htmlFor="wd-website-url" className="form-check-label ms-2">Website URL</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="check-online-option" className="form-check-input" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings" className="form-check-label ms-2">Media Recordings</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="check-online-option" className="form-check-input" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation" className="form-check-label ms-2">Student Annotation</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="check-online-option" className="form-check-input" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload" className="form-check-label ms-2">File Uploads</label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset className="row mb-5">
                <legend className="col-form-label col-sm-2 pt-0 text-end">Assign</legend>
                <div className="col">
                    <div className="border rounded p-3">
                        <div>
                            <label htmlFor="wd-assign-to" className="form_input_header_label form-label">Assign to</label>
                            <select id="wd-assign-to" className="form-select mb-3">
                                <option selected value="Online">Everyone</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="wd-due-date" className="form_input_header_label form-label">Due</label>
                            <input type="date" className="form-control mb-3"
                                id="wd-due-date"
                                value="2024-05-13" />
                        </div>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from" className="form_input_header_label form-label">Available from</label>
                                <input type="date" className="form-control mb-3"
                                    id="wd-available-from"
                                    value="2024-05-06" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="wd-available-until" className="form_input_header_label form-label">Until</label>
                                <input type="date" className="form-control mb-3"
                                    id="wd-available-until"
                                    value="2024-05-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
            <hr />
            <button id="wd-assignment-save" className="btn btn-lg btn-danger me-1 float-end">Save</button>
            <button id="wd-assignment-cancel" className="btn btn-lg btn-secondary me-1 float-end">Cancel</button>
        </form>
    );
}
