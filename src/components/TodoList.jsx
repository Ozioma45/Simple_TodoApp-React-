import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function ({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.Done) - Number(b.Done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          item={item}
          key={item.name}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
