import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentById,addStudents,updateStudents } from '../service/StudentService';
import { useNavigate, useLocation } from 'react-router-dom';
import { addStudent as addStudentAction, updateStudent as updateStudentAction } from '../redux/actions';
import './studentForm.css';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [isFormEnabled, setIsFormEnabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('edit');
  const dispatch = useDispatch();
  const students = useSelector(state => state.studentState.students);

  useEffect(() => {
    if (id) {
      const student = students.find(student => student.id === parseInt(id));
      if (student) {
        setName(student.name);
        setEmail(student.email);
        setDob(student.dob);
        setAge(student.age);
      } else {
        getStudentById(id)
          .then(data => {
            setName(data.name);
            setEmail(data.email);
            setDob(data.dob);
            setAge(data.age);
          })
          .catch(error => console.error('Error fetching student:', error));
      }
    }
  }, [id, students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { id: id ? parseInt(id) : Date.now(), name, email, dob, age };

    if (id) {
      updateStudents(id, student)
        .then(data => {
          dispatch(updateStudentAction(data));
          navigate('/students');
        })
        .catch(error => console.error('Error updating student:', error));
    } else {
      addStudents(student)
        .then(data => {
          dispatch(addStudentAction(data));
          navigate('/students');
        })
        .catch(error => console.error('Error adding student:', error));
    }
  };

  const toggleFormState = () => {
    setIsFormEnabled(!isFormEnabled);
  };

  return (
    <div className="form-container">
      <h2>{id ? 'Edit Student' : 'Register Student'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            disabled={!isFormEnabled} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            disabled={!isFormEnabled} 
            required 
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input 
            type="date" 
            value={dob} 
            onChange={(e) => setDob(e.target.value)} 
            disabled={!isFormEnabled} 
            required 
          />
        </div>
        <div>
          <label>Age:</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            disabled={!isFormEnabled} 
            required 
          />
        </div>
        {id && (
          <div>
            <label>
              <input
                type="checkbox"
                checked={isFormEnabled}
                onChange={toggleFormState}
              />
              Enable Form
            </label>
          </div>
        )}
        <button type="submit" disabled={!isFormEnabled}>
          {id ? 'Update Student' : 'Add Student'}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
