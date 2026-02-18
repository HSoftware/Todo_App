// Iconos bootstrap
import { BsCheck2Circle, BsFileExcel } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import styles from "./TodoItem.module.scss"


export function TodoItem ({ text, completed, onComplete }) {
  return (
    <>
      <li >
        <span 
          className={`${styles.icon} ${completed? styles.iconCompleted: ""}`}
          onClick={onComplete}
        >
          <BsCheck2Circle />
        </span>
        <p className={`${styles.itemText} ${completed? styles.itemTextCompleted: ""}`}>
          {text}
        </p>
        <span className={`${styles.icon} ${styles.iconDelete}`}>
          <BsFileExcel />
        </span>
      </li>
    </>
  )
}