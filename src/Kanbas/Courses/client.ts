import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`; // Direct quiz endpoint for some operations
const axiosWithCredentials = axios.create({ withCredentials: true });

// Course Endpoints
export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course);
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${course._id}`,
    course
  );
  return data;
};

// Quiz Endpoints
export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/quizzes`
  );
  return response.data;
};

export const createQuizForCourse = async (courseId: string, quiz: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/quizzes`,
    quiz
  );
  return response.data;
};

export const updateQuiz = async (quizId: string, quiz: any) => {
  const response = await axiosWithCredentials.put(
    `${QUIZZES_API}/${quizId}`,
    quiz
  );
  return response.data;
};

export const deleteQuiz = async (quizId: string) => {
  const response = await axiosWithCredentials.delete(
    `${QUIZZES_API}/${quizId}`
  );
  return response.data;
};

// Question Endpoints
export const addOrUpdateQuestion = async (
  quizId: string,
  question: any,
  questionId?: string
) => {
  const url = questionId
    ? `${QUIZZES_API}/${quizId}/questions/${questionId}`
    : `${QUIZZES_API}/${quizId}/questions`;

  const method = questionId ? "put" : "post";

  const response = await axiosWithCredentials[method](url, question);
  return response.data;
};

export const deleteQuestion = async (quizId: string, questionId: string) => {
  const response = await axiosWithCredentials.delete(
    `${QUIZZES_API}/${quizId}/questions/${questionId}`
  );
  return response.data;
};

// Attempt Endpoints
export const recordQuizAttempt = async (quizId: string, userId: string) => {
  const response = await axiosWithCredentials.post(
    `${QUIZZES_API}/${quizId}/attempt`,
    { userId }
  );
  return response.data;
};

export const getAttemptCount = async (quizId: string, userId: string) => {
  const response = await axiosWithCredentials.get(
    `${QUIZZES_API}/${quizId}/attempts`,
    { params: { userId } }
  );
  return response.data;
};
