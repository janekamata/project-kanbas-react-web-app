// src/Kanbas/Courses/index.tsx

import React, { useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import { Route, Routes, useParams, useLocation } from "react-router";
import PeopleTable from "./People/Table";
import ProtectedRouteEditor from "./ProtectedRouteEditor";
import ProtectedRouteQuizEditor from "./ProtectedRouteQuizEditor";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizPreview from "./Quizzes/QuizPreview";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizReview from "./Quizzes/QuizReview";
import * as coursesClient from "../Courses/client";
import { useDispatch, useSelector } from "react-redux";
import { setQuizzes } from "./Quizzes/reducer";
interface Quiz {
  score?: number;
  lastAttempt?: any;
  _id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

interface Choice {
  _id: string;
  question: string;
  correct: boolean;
  answer: string;
  selected: boolean;
}

interface QuizQuestion {
  name: string;
  _id: string;
  text: string;
  points: number;
  answers: QuizAnswerType[];
  quiz: string;
  title: string;
  type: string;
  question: string;
  choices: Choice[];
  edit: boolean;
  correct: boolean;
  attemptAnswer: string;
}

interface QuizAnswerType {
  _id: string;
  text: string;
  selected?: boolean;
}

interface User {
  _id: string;
  role: "STUDENT" | "FACULTY" | "ADMIN";
}

interface Attempt {
  lastAttempt: any;
  _id: string;
  quizId: string;
  userId: string;
  questions: AttemptQuestionType[];
  score: number;
  attemptDate: string;
}

interface AttemptQuestionType {
  currentAnswer: any;
  answer: string;
  question: string;
  _id: string;
  // questionId: string;
  // selectedAnswerIds: string[]; // Array of selected answer IDs for the question
}

interface RootState {
  quizzesReducer: {
    quizzes: Quiz[];
  };
  accountReducer: {
    currentUser: User | null;
  };
}

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams<{ cid: string }>();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  // Access currentUser from Redux store
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const [users, setUsers] = useState<any[]>([]);
  const [quizzesLoading, setQuizzesLoading] = useState<boolean>(false);
  const [quizzesError, setQuizzesError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const usersIn = await coursesClient.findUsersForCourse(cid as string);
      setUsers(usersIn);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const fetchQuizzes = async () => {
    setQuizzesLoading(true);
    try {
      const fetchedQuizzes = await coursesClient.findQuizzesForCourse(
        cid as string
      );
      let filteredQuizzes = fetchedQuizzes;

      if (currentUser?.role === "STUDENT") {
        filteredQuizzes = fetchedQuizzes.filter(
          (q: { published: boolean }) => q.published
        );
      }

      dispatch(setQuizzes(filteredQuizzes));
    } catch (error) {
      console.error("Failed to fetch quizzes:", error);
      setQuizzesError("Failed to load quizzes.");
      // Optionally, set more detailed error information
    } finally {
      setQuizzesLoading(false);
    }
  };

  useEffect(() => {
    if (cid) {
      fetchUsers();
      fetchQuizzes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid, currentUser?.role]); // Re-fetch quizzes if course ID or user role changes

  console.log("Courses component rendered");

  return (
    <div id="wd-courses">
      {course && (
        <div>
          <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />
            {course.name} &gt; {pathname.split("/")[4]}
          </h2>
          <hr />
          <div className="d-flex">
            <div className="d-none d-md-block">
              <CoursesNavigation />
            </div>
            <div className="flex-fill">
              {quizzesLoading && <div>Loading quizzes...</div>}
              {quizzesError && (
                <div className="text-danger">{quizzesError}</div>
              )}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<h2>Piazza</h2>} />
                <Route path="Zoom" element={<h2>Zoom</h2>} />
                <Route path="Assignments" element={<Assignments />} />
                <Route
                  path="Assignments/:aid"
                  element={
                    <ProtectedRouteEditor>
                      <AssignmentEditor />
                    </ProtectedRouteEditor>
                  }
                />
                <Route path="Quizzes" element={<Quizzes />} />
                <Route path="Quizzes/:qid" element={<QuizDetails />} />
                <Route
                  path="Quizzes/:qid/Edit/*"
                  element={
                    <ProtectedRouteQuizEditor>
                      <QuizEditor />
                    </ProtectedRouteQuizEditor>
                  }
                />
                <Route
                  path="Quizzes/:qid/Preview"
                  element={
                    <ProtectedRouteQuizEditor>
                      <QuizPreview />
                    </ProtectedRouteQuizEditor>
                  }
                />
                <Route path="Quizzes/:qid/Review" element={<QuizReview />} />
                <Route path="Quizzes/:qid/Attempt" element={<QuizPreview />} />
                <Route path="Grades" element={<h2>Grades</h2>} />
                <Route path="People" element={<PeopleTable users={users} />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
      {!course && <div>Course not found.</div>}
    </div>
  );
}
