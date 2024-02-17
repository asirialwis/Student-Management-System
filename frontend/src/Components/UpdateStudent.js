import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateStudent() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [updatedStudentData, setUpdatedStudentData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);

  const handleEdit = (student) => {
    setEditingStudent(student);
    setUpdatedStudentData({
      name: student.name,
      age: student.age,
      gender: student.gender,
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:8070/student/update/${editingStudent._id}`,
        updatedStudentData
      );
      // Assuming the backend sends back a success message
      alert("Student updated successfully!");
      // Update the students state with the new data
      const updatedStudents = students.map((student) => {
        if (student._id === editingStudent._id) {
          return {
            ...student,
            ...updatedStudentData,
          };
        }
        return student;
      });
      setStudents(updatedStudents);
      setEditingStudent(null);
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Error updating student");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>All Students</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                {editingStudent === student ? (
                  <input
                    type="text"
                    name="name"
                    value={updatedStudentData.name}
                    onChange={handleChange}
                  />
                ) : (
                  student.name
                )}
              </td>
              <td>
                {editingStudent === student ? (
                  <input
                    type="number"
                    name="age"
                    value={updatedStudentData.age}
                    onChange={handleChange}
                  />
                ) : (
                  student.age
                )}
              </td>
              <td>
                {editingStudent === student ? (
                  <input
                    type="text"
                    name="gender"
                    value={updatedStudentData.gender}
                    onChange={handleChange}
                  />
                ) : (
                  student.gender
                )}
              </td>
              <td>
                {editingStudent === student ? (
                  <button onClick={handleUpdate}>Update</button>
                ) : (
                  <button onClick={() => handleEdit(student)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UpdateStudent;
