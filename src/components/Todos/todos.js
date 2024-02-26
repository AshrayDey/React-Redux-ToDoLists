import styles from "./todos.module.scss";
//REACT ICON IMPORTS
import { MdDeleteOutline } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
//REDUX IMPORTS
import { actions, todoSelector } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector);
  
  return (
    <>
      {todos.map((todo, index) => (
        <div key={index} className={styles.container}>
          <h2>{todo.Title}</h2>
          <p>{todo.Description} </p>
          <div className={styles.options}>
            <MdDeleteOutline className={styles.delete} onClick={()=>dispatch(actions.deleteTodo(index))}/>
            <TiTickOutline className={styles.completed} onClick={()=>dispatch(actions.completed(index))}/>
          </div>
        </div>
      ))}
    </>
  );
};
