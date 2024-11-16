import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3001')
    .then(response => response.json()) 
    .then(data => {
      console.log(data)
      setUsers(data)
    })
    .catch(error =>{
      console.log(error.message)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {users.map((user)=>(
          <>
          <p>{user.email} - {user.senha}</p>
          </>
        ))}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
