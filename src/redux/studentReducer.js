// src/redux/employeeReducer.js
import { ADD_STUDENT, UPDATE_STUDENT, SET_STUDENTS } from './actionTypes';

const initialState = {
 students: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
            student.id === action.payload.id ? action.payload : student
        ),
      };
    case SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
