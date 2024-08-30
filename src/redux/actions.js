// src/redux/actions.js
import { ADD_STUDENT, UPDATE_STUDENT,SET_STUDENTS } from './actionTypes';

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});

export const updateStudent = (student) => ({
  type: UPDATE_STUDENT,
  payload: student,
});



export const setStudents = (students) => ({
  type: SET_STUDENTS,
  payload: students,
});
