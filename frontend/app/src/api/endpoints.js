import { core } from "./core";

// ===================== AUTH =====================
export const login = (credentials) => core.post("/login", credentials, false);
export const register = (data) => core.post("/register", data, false);
export const logout = () => core.post("/logout", {}, true); // optional

// ===================== STUDENTS =====================
export const getAllStudents = (filters = {}) => core.get("/students", filters);
export const getStudentById = (id) => core.get(`/students/${id}`);
export const createStudent = (data) => core.post("/students", data);
export const updateStudent = (id, data) => core.put(`/students/${id}`, data);
export const deleteStudent = (id) => core.del(`/students/${id}`);

// ===================== TEACHERS =====================
export const getAllTeachers = (filters = {}) => core.get("/teachers", filters);
export const getTeacherById = (id) => core.get(`/teachers/${id}`);
export const createTeacher = (data) => core.post("/teachers", data);
export const updateTeacher = (id, data) => core.put(`/teachers/${id}`, data);
export const deleteTeacher = (id) => core.del(`/teachers/${id}`);

// ===================== COURSES =====================
export const getAllCourses = (filters = {}) => core.get("/courses", filters);
export const getCourseById = (id) => core.get(`/courses/${id}`);
export const createCourse = (data) => core.post("/courses", data);
export const updateCourse = (id, data) => core.put(`/courses/${id}`, data);
export const deleteCourse = (id) => core.del(`/courses/${id}`);

// ===================== ENROLLMENTS =====================
export const getAllEnrollments = (filters = {}) => core.get("/enrollments", filters);
export const getEnrollmentById = (id) => core.get(`/enrollments/${id}`);
export const createEnrollment = (data) => core.post("/enrollments", data);
export const updateEnrollment = (id, data) => core.put(`/enrollments/${id}`, data);
export const deleteEnrollment = (id) => core.del(`/enrollments/${id}`);
