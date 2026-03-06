import { BsPlusCircle } from "react-icons/bs";
import styles from "./CreateTodoButton.module.scss"
import { useContext } from "react";
import { TodoContext } from "../TodoContext";



export function CreateTodoButton() {
    const {openModal, setOpenModal} = useContext(TodoContext)
    return (
        <div className={styles.CreateTodoButton}>
            <button
                title="Agregar tarea"
                onClick={() => {
                    setOpenModal(true)
                }}
            >
                <BsPlusCircle 
                    color="var(--icon-color)"
                />
            </button>
        </div>
    )
}