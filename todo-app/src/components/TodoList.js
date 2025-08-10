import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  return (
    <div className={styles.TodoList}>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
