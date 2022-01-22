import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";
const AddUser = (props) => {
  const [usernameInput, setUserNameInput] = useState("");
  const [userageInput, setUserAgeInput] = useState("");
  const [error, SetError] = useState();
  const usernameChangeHandler = (event) => {
    setUserNameInput(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setUserAgeInput(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (usernameInput.trim().length === 0 || userageInput.trim().length === 0) {
      SetError({
        title: "Invalid Input",
        message: "Enter a valid Username and Age (non-empty values)."
      });
      return;
    }
    if (+userageInput < 1) {
      SetError({
        title: "Invalid Input",
        message: "Enter a valid Age (>1)"
      });
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
  const errorHandler = () => {
    SetError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorClick={errorHandler}
        />
      )}
      <Card className={styles.users}>
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
          <div className={styles.footer}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
