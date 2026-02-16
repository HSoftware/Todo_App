// Iconos bootstrap
import { BsCheck2Circle, BsFileExcel } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import styles from "./TodoItem.module.scss"


export function TodoItem ({ text, completed }) {
  return (
    <>
      <li className={styles.item}>
        <span><BsCheck2Circle size={24} /></span>
        <p className={styles.itemText}>{text}</p>
        <span><BsFileExcel size={24} /></span>
      </li>
    </>
  )
}