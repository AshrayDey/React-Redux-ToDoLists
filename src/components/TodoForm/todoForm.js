import { useState } from "react";
import styles from "./todoForm.module.scss";
//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { actions } from "../../redux/reducer";

export const TodoForm = () => {
  // State for managing title and description input values
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Dispatch the 'add' action with the current title and description values
    dispatch(actions.add({ title, description }));

    // Clear the input values after submitting the form
    setTitle("");
    setDescription("");
  }
  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.todoInput} onSubmit={handleSubmit}>
          <div className={styles.title}>
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Title?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className={styles.description}>
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="What's the task description?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
    </>
  );
};
