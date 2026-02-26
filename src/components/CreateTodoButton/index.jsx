import { BsPlusCircle } from "react-icons/bs";
import styles from "./CreateTodoButton.module.scss"

export function CreateTodoButton() {
    return (
        <div className={styles.CreateTodoButton}>
            <button
                title="Agregar tarea"
            >
                <BsPlusCircle />
            </button>
        </div>
    )
}