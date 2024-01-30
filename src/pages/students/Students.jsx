import React, { useEffect, useState } from "react";
import "./Students.scss";
import { Navigate } from "react-router-dom";
import axios from "axios";
import edit from "../../../public/edit.svg";
import dalete from "../../../public/delete.svg";
const Students = ({ user }) => {
  const [students, setStudents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searched, setSearched] = useState("");

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/students`);
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearched(e.target.value);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = (id) => {
    if (confirm("Rostan ham ochirmoqchimisiz ?")) {
      axios
        .delete(`http://localhost:3000/students/${id}`)
        .then((res) => {
          console.log("Muvaffaqiyatli ochirildi!", res.data);
          fetchStudents();
        })
        .catch((error) => {
          console.log("Xatolik tufayli o`chmadi");
        });
    }
  };

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // FILTER
  const filteredStudents =
    selectedCategory === "all"
      ? students
      : students.filter((student) => student.level === selectedCategory);

  // SEARCH
  const searchedStudents = searched
    ? filteredStudents.filter(
        (student) =>
          student.firstname.toLowerCase().includes(searched.toLowerCase()) ||
          student.lastname.toLowerCase().includes(searched.toLowerCase())
      )
    : filteredStudents;

  return (
    <div className="wrong">
      <div className="all-students">
        <div  className="like-header">
          
          <input
            className="search"
            type="search"
            name="search"
            id="search"
            placeholder="Search!"
            onChange={handleSearch}
          />
          <select
            className="filter"
            name="all"
            id="all"
            onChange={handleCategory}
            value={selectedCategory}
          >
            <option value="all">All</option>
            <option value="advanced">Advanced</option>
            <option value="intermediate">Intermediate</option>
            <option value="beginner">Beginner</option>
          </select>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {searchedStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.level}</td>
                <td>
                  <button className="btn" ><img src={edit} alt="" /></button>
                  <button className="btn" onClick={() => handleDelete(student.id)}>
                    <img src={dalete} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
