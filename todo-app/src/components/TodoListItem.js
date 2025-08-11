import styles from "./TodoListItem.module.scss";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import React from "react";

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    <div className={styles["TodoListItem-virtualized"]} style={style}>
      <div className={styles.TodoListItem}>
        <div
          className={cn(styles.checkbox, { [styles.checked]: checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.remove} onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
