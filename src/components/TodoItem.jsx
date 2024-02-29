import styles from "./TodoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete Btn clicked", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, Done: !todo.Done } : todo
      )
    );
  }

  const className = item.Done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            className={styles.deleteBtn}
            onClick={() => handleDelete(item)}>
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
