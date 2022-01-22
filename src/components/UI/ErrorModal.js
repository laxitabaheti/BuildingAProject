import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div onClick={props.onErrorClick}>
      <div className={styles.backdrop} />
      <Card className={styles.ErrorModal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.footer}>
          <Button onClick={props.onErrorClick}>okay!</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
