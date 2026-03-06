import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const TodoContext = createContext()

export function TodoProvider({ children }) {

  // ESTADOS DE LA APLICACIÓN
  const [theme, setTheme] = useState("dark")                    // Controla el tema light/dark
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  const {
    item: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", [])    // Custom hook que trae los Todos
                                                                // y la función que actualiza estado y localStorage
  const [searchValue, setSearchValue] = useState("")            // Valor del input de la búsqueda

  const [openModal, setOpenModal] = useState(false)             // Estado que controla la visualizacion del modal

  const [nuevaTarea, setNuevaTarea] = useState("")              // Estado para crear nuevas tareas

  // Estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length    // Número de todos completados
  const totalTodos = todos.length                                         // Total de todos

   
  const searchedTodos = todos.filter((todo) => {                 // Retorna los todos que concuerdan con la búsqueda
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return (
      todoText.includes(searchText)
    )
  })
  
  // FUNCIONES
  const  closeModal = () => {                              // Cierra modal
    setOpenModal(false)                                    // Pone el estado de modal a falso
  }

  const completeTodo = (text) => {                         // Marca todo como completado y actualiza el estado. text es el identificador (key) del Todo
    const newTodos = [...todos]                            // Crea una copia de los Todos
    const todoIndex = newTodos.findIndex((todo) => (       // Encuentra el indice del todo correspondiente
      todo.text === text
    ))
    newTodos[todoIndex].completed = true                   // Cambia a completado el todo elegido
    saveTodos(newTodos)                                     // Actualiza la todalidad de Todos
  }

  const deleteTodo = (text) => {                           // Borra un todo de la lista. text es el identificador
    const newTodos = [...todos]                            // Crea una copia de los Todos
    const todoIndex = newTodos.findIndex((todo) => (       // Encuentra el indice del todo correspondiente
      todo.text === text
    ))
    newTodos.splice(todoIndex, 1)                          // Borra el todo elegido
    saveTodos(newTodos)                                     // Actualiza la todalidad de Todos
  }

  const addTodo = (text) =>  {
    
    const nuevoTodo = { text: text, completed: false } 
    const copyTodos = [...todos]
    copyTodos.unshift(nuevoTodo)
    localStorage.setItem("TODOS_V1", JSON.stringify(copyTodos)) 
    saveTodos(copyTodos)
}

  
  return (
    <TodoContext value={{
            theme,
            setTheme, 
            todos,
            saveTodos,
            loading,
            error,
            completedTodos, 
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            closeModal,
            setOpenModal,
            nuevaTarea, 
            setNuevaTarea,
        }}> 
        { children }
    </TodoContext>
  )
}

