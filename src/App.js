import React from "react";
import { useState } from "react";
// import React from "react";
// import Button from "./Button";/
// import ReactDom from "react-dom";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";
function App() {
  const [userData, setUserData] = useState([]);

  const userInfo = (newName, newAge) => {
    setUserData((previousdata) => {
      return [
        ...previousdata,
        { name: newName, age: newAge, id: Math.random().toString() }
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={userInfo} />
      <UserList users={userData} />
    </React.Fragment>
  );
}

export default App;
