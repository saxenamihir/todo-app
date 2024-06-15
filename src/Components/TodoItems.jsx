
import styles from "../TodoItems.module.css";
import TodoItem from "../TodoItem";
const TodoItems = ({ todoItems,onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map(item=><TodoItem todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}/>)}
    </div>
  );
};

export default TodoItems;
