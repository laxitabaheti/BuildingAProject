import Card from "../UI/Card";
import React from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import { useState, useRef } from "react";

const AddUser = (props) => {
  // const [usernameInput, setUserNameInput] = useState("");

  // const [userageInput, setUserAgeInput] = useState("");
  const inputUserNameRef = useRef();
  const inputAgeRef = useRef();

  const [error, SetError] = useState();

  // const usernameChangeHandler = (event) => {
  //   setUserNameInput(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setUserAgeInput(event.target.value);
  // };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = inputUserNameRef.current.value;
    const enteredAge = inputAgeRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      SetError({
        title: "Invalid Input",
        message: "Enter a valid Username and Age (non-empty values)."
      });
      return;
    }

    if (+enteredAge < 1) {
      SetError({
        title: "Invalid Input",
        message: "Enter a valid Age (>1)"
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    inputUserNameRef.current.value = "";
    inputAgeRef.current.value = "";
    // setUserNameInput("");
    // setUserAgeInput("");
  };

  const errorHandler = () => {
    SetError(null);
  };

  return (
    <Wrapper>
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
            // value={usernameInput}
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            ref={inputUserNameRef}
          />
          <label className={styles.label} htmlFor="age">
            Age (Years)
          </label>
          <input
            className={styles.input}
            // value={userageInput}
            id="age"
            // onChange={ageChangeHandler}
            type="number"
            ref={inputAgeRef}
          />
          <div className={styles.footer}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
