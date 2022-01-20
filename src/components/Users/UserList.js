import Card from "../UI/Card";
import styles from "./UserList.module.css";
const UserList = (props) => {
  return (
    <div>
      <Card>
        <ul className={styles.ul}>
          {props.users.map((user) => (
            <li className={styles.li} key={props.id}>
              {user.name} is {user.age} years old.
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
export default UserList;
