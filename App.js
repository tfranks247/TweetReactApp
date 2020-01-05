import React, {useState} from "react";
import Tweet from "./Tweet";
import './App.css';
import './index.css';


function App() {

const [user, setUsers] = useState([
  {name: 'Ed', message: "Hello homies"},
  {name: 'Tony', message: "Sup bro?"},
  {name: 'John Snow', message: "Hakuna Matata"},
]);

  return (
    <div className="App">
      {user.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
