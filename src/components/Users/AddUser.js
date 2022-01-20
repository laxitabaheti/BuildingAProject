import Card from "../UI/Card";
import styles from "./AddUser.module.css";
const AddUser = (props) => {
  const SubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Card className={styles.card}>
        <form onSubmit={SubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
