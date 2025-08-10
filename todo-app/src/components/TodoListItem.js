import styles from "./TodoListItem.module.scss";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

const TodoListItem = () => {
  return (
    <div className={styles.TodoListItem}>
      <div className={styles.checkbox}>
        <MdCheckBoxOutlineBlank />
        <div className={styles.text}>할 일</div>
      </div>
      <div className={styles.remove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
