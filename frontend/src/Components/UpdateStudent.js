import { useState, useEffect } from "react";
import axios from "axios";

function UpdateStudent() {
  const [students, setStudents] = useState([]);


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

  const btnstyle = {  
    "text-align": "center"
    // "margin": "10px 10px 10px 10px",
  };

  return (
    <div>
      <h1>All Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age} - {student.gender} 
            <div style = {{margin:'20px'}}>
            <button type="button" class="btn btn-outline-success" style={btnstyle}>Success</button>
            <button type="button" class="btn btn-outline-danger"style={btnstyle}>Danger</button>
            </div>
         
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpdateStudent;
