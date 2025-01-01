import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    axios.get('https://node-render-2dop.onrender.com/students')
      .then(res => {
        console.log(res.data);
        setStudents(res.data.students);
      })
      .catch(err => {
        console.log(err);
      })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          students.length: {students.length}
          {
            students.map((student, index) => {
              return <p key={index}>{student.name}</p>
            })
          }
        </p>
        
      </header>
    </div>
  );
}

export default App;
