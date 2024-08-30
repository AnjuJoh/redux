import axios from 'axios';

const BASE_URL = 'http://localhost:5000/students';

const getStudents = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

const getStudentById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching student by ID ${id}:`, error);
    throw error;
  }
};

const addStudents = async (student) => {
  try {
    const response = await axios.post(BASE_URL, student);
    return response.data;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

const updateStudents = async (id, student) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, student);
    return response.data;
  } catch (error) {
    console.error(`Error updating student with ID ${id}:`, error);
    throw error;
  }
};

export { getStudents, getStudentById, addStudents, updateStudents };
