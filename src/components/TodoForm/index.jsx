import styles from "./TodoForm.module.scss"
import { CloseIcon } from "../Icons/CloseIcon"
import { useContext, useState } from "react"
import { TodoContext } from "../TodoContext"


export function TodoForm({ onClose }) {
    const {setOpenModal, nuevaTarea, setNuevaTarea, addTodo} = useContext(TodoContext)

    return (
            
            <form 
                onSubmit={(e) => {
                    e.preventDefault()
                    addTodo(nuevaTarea)
                    setNuevaTarea("")
                    setOpenModal(false)
                }}
                className={styles.FormBackground}>
                <label className={styles.Titulo}>Nueva tarea</label>
                <textarea 
                    rows="4" 
                    placeholder="Escribe tu tarea aquí..."
                    value={nuevaTarea}           // Estado
                    onChange={(e) => setNuevaTarea(e.target.value)} 
                />
                <div>
                    <button 
                        className={styles.Form_Button}
                        onClick={() => {
                            setNuevaTarea("")
                            setOpenModal(false)}}
                    >Cancelar</button> 
                    <button className={styles.Form_Button}>Guardar</button> 
                </div>
            </form>
            
    )
}