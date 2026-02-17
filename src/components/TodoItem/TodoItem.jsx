// Iconos bootstrap
import { BsCheck2Circle, BsFileExcel } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import styles from "./TodoItem.module.scss"


export function TodoItem ({ text, completed }) {
  return (
    <>
      <li >
        <span className={`${styles.icon} ${completed? styles.iconCompleted: ""}`}>
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