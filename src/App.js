import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import StudentForm from './components/studentForm';
import StudentList from './components/studentList';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<StudentForm />} />
            <Route path="/students" element={<StudentList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
