import styles from "./Button.module.css";

const Button = ({ fetchImages }) => {
  return (
    <button className={styles.Button} type="button" onClick={fetchImages}>
      Load more
    </button>
  );
};

export default Button;
