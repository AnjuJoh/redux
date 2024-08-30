import React from 'react';
import { Link } from 'react-router-dom';
import './studentItem.css';

const StudentItem = ({ student }) => {
  return (
    <li className="student-item">
      <span className="student-name">{student.name}</span>
      <span className="student-email">({student.email})</span>
      <span className="student-dob">({student.dob})</span>
      <span className="student-age">({student.age})</span>
      <div className="actions">
        <Link to={`/?edit=${student.id}`} className="edit-button">Edit</Link>
      </div>
    </li>
  );
};

export default StudentItem;
