import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudents } from '../service/StudentService';
import { setStudents } from '../redux/actions';
import StudentItem from './studentItem';

const StudentList = () => {
  const students = useSelector(state => state.studentState.students);
  const dispatch = useDispatch();

  useEffect(() => {
    getStudents()
      .then(data => dispatch(setStudents(data)))
      .catch(error => console.error('Error fetching students:', error));
  }, [dispatch]);

  return (
    <div>
      <h2>Registered Students</h2>
      <ul>
        {students.map(student => (
          <StudentItem key={student.id} student={student} />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
