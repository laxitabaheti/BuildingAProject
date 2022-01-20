import React from "react";
import { useState } from "react";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";
function App() {
  const [userData, setUserData] = useState([]);
  // const userInfo = (newData) => {
  //   setUserData((previousdata) => {
  //     return [...previousdata, newData];
  //   });
  //   console.log(userData);
  // };
  const userInfo = (newName, newAge) => {
    setUserData((previousdata) => {
      return [
        ...previousdata,
        { name: newName, age: newAge, id: Math.random().toString() }
      ];
    });
    console.log(userData);
  };
  return (
    <div>
      <AddUser onAddUser={userInfo} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
