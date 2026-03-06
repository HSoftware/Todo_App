// Iconos bootstrap
import styles from "./TodoItem.module.scss"
import { CompleteIcon } from "../Icons/CompleteIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";


export function TodoItem ({ text, completed, onComplete, onDelete }) {
  return (
    <>
      <li >        
          <CompleteIcon 
            completed={completed}
            onComplete={onComplete}
          />  
        
        <p className={`${styles.itemText} ${completed? styles.itemTextCompleted: ""}`}>
          {text}
        </p> 

        <DeleteIcon 
          onDelete={onDelete}
        />        
      </li>
    </>
  )
}