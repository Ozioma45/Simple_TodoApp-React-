import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", Done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", Done: false });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <div className={styles.inputCont}>
        <input
          onChange={(e) => setTodo({ name: e.target.value, Done: false })}
          value={todo.name}
          type="text"
          className={styles.modernInput}
          placeholder="Enter Todo Item..."
        />
        <button className={styles.modernBtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
