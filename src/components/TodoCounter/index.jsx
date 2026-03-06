import { useContext } from "react"
import { TodoContext } from "../TodoContext"

export function TodoCounter({ completed, total }) {

    const {
        completedTodos, 
        totalTodos,
    } = useContext(TodoContext)
    return (
        <h2>Has completado {completedTodos} de {totalTodos} Todos</h2>
    )
}