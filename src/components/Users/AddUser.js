import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

import { useState } from "react";
const AddUser = (props) => {
  const [usernameInput, setUserNameInput] = useState("");
  const [userageInput, setUserAgeInput] = useState("");

  const usernameChangeHandler = (event) => {
    setUserNameInput(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setUserAgeInput(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (usernameInput.trim().length === 0 || userageInput.trim().length === 0) {
      return;
    }
    if (+userageInput < 1) {
      return;
    }

    // console.log(usernameInput, userageInput);
    // let user = {
    //   name: usernameInput,
    //   age: userageInput,
    //   id: Math.random.toString()
    // };

    // props.onAddUser(user);
    props.onAddUser(usernameInput, userageInput);
    setUserNameInput("");
    setUserAgeInput("");
  };
  return (
    <div>
      <Card>
        <form onSubmit={SubmitHandler}>
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input
            className={styles.input}
            value={usernameInput}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          />
          <label className={styles.label} htmlFor="age">
            Age (Years)
          </label>
          <input
            className={styles.input}
            value={userageInput}
            id="age"
            onChange={ageChangeHandler}
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
