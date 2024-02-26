//REACT ICONS IMPORTS
import { MdDeleteOutline } from "react-icons/md";

import styles from "./completedTodos.module.scss";
//REDUX IMPORTS
import { useDispatch, useSelector } from "react-redux";
import { actions, completedSelector } from "../../redux/reducer";

export const Completed = () => {
  const todos = useSelector(completedSelector);
  const dispatch=useDispatch();
  return (
    <>
      {todos.map((todo,index) => (
        <div className={styles.container}>
          <h1>COMPLETED</h1>
          <div>
            <div className={styles.task}>
              <h3>{todo.text}</h3>
              <h4>Completed on {todo.completedOn}</h4>
            </div>

            <div className={styles.option}>
              <MdDeleteOutline className={styles.delete} onClick={()=>dispatch(actions.deleteCompleted(index))}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
