import { Completed } from "../CompletedTab/completedTodos";
import { TodoForm } from "../TodoForm/todoForm";
import { Todos } from "../Todos/todos";
import styles from "./todoPage.module.scss";
import React, { useState } from "react";


export const TodoPage = () => {
  // State to manage the active tab (Todo or Completed)
  const [todoScreen, setTodoScreen] = useState(true);

  return (
    <>
      {/* Main container for the TodoPage */}
      <div className={styles.container}>
        {/* Form for adding new todos */}
        <TodoForm />

        {/* Tabs for switching between Todo and Completed views */}
        <div className={styles.tabs}>
          {/* Todo Tab */}
          <button
            className={styles.todoTab}
            onClick={() => setTodoScreen(true)}
            style={
              todoScreen ? { backgroundColor: "rgba(255, 0, 0, 0.637)" } : {}
            }
          >
            Todo
          </button>

          {/* Completed Tab */}
          <button
            className={styles.completedTab}
            onClick={() => setTodoScreen(false)}
            style={
              !todoScreen ? { backgroundColor: "rgba(255, 0, 0, 0.637)" } : {}
            }
          >
            Completed
          </button>
        </div>

        {/* Render either Todos or Completed component based on the active tab */}
        {todoScreen ? <Todos /> : <Completed />}
      </div>
    </>
  );
};