import { useState, useEffect } from "react";
import axios from "axios";

function AllStudent() {
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

  return (
    <div>
      <h1>All Student</h1>
      {/* <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age} - {student.gender}
          </li>
        ))}
      </ul> */}
      {/* form method */}

      {/* <form>
    {students.map((student) => (
      <div key={student.id}>
        <label>
          Name:
          <input type="text" value={student.name} readOnly />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={student.age} readOnly />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" value={student.gender} readOnly />
        </label>
        <br />
        <br />
      </div>
    ))}
  </form> */}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AllStudent;
