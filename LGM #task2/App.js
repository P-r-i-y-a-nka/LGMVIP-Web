import React, {useState, useEffect} from 'react';
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  };

  return (
    <div className="App">
      <button className="button" onClick={loadUsers}>
        Get Data
      </button>
      {loadUsers && (
        <div className="item_container">
          <h2>USER DETAILS</h2>
          <div className="item_content">
            {users.map((users) => (
              <div className="item_data" key={users.id}>
                <h3>Name : {users.login}</h3>
                <img src={users.avatar_url} alt=""></img>
                <h4>GitHub : {users.html_url}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
