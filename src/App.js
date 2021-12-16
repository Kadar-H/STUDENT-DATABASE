import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";
import StudentCard from "./Components/StudentCard/StudentCard";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users`).then((response) => {
      response.json().then((responseJSON) => {
        console.log(responseJSON);
      });
    });
  }, []);
  return (
    <div className="App">
      <StudentCard />
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>
              <h4>Student Name:</h4>
              {"\n"}
              {val.first_name},{"\n"}
              <h4>Student Id:</h4>
              {"\n"}
              {val.StudentId},{"\n"}
              <h4>Student Email:</h4>
              {"\n"}
              {val.email}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
