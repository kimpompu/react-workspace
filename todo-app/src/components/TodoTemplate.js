import styles from "./TodoTemplate.module.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className={styles.TodoTemplate}>
      <div className={styles["app-title"]}>일정 관리</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default TodoTemplate;
