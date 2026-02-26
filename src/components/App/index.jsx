

import { AppUI } from "./AppUI"
import { useLocalStorage } from "./useLocalStorage"

import { useState } from 'react'

function App() {
  
  // ESTADOS DE LA APLICACIÓN
  const [theme, setTheme] = useState("dark")                    // Sin uso todavía

  const {
    item: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", [])    // Custom hook que trae los Todos
                                                                // y la función que actualiza estado y localStorage
  const [searchValue, setSearchValue] = useState("")            // Valor del input de la búsqueda

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


  return (
    <AppUI 
      loading = {loading}
      error = {error}
      completedTodos = {completedTodos}                    // Número de Todos completados
      totalTodos = {totalTodos}                            // Número total de Todos
      searchValue = {searchValue}                          // Estado: valor actual del input
      setSearchValue = {setSearchValue}                    // Setter: actualizador del estado que depende del input
      searchedTodos = {searchedTodos}                      // Todos filtrados por la búsqueda
      completeTodo ={completeTodo}                         // Función de completado de Todos
      deleteTodo ={deleteTodo}                             // Función de borrado de Todos
    />
  )
}

export default App

/* 
const 

defaultTodo = [
  { text: 'Aprender React', completed: false },
  { text: 'Repasar useState', completed: true },
  { text: 'Practicar useEffect', completed: false },
  { text: 'Entender useContext', completed: false },
  { text: 'Crear custom hooks', completed: true },
  { text: 'Leer documentación oficial', completed: false },
  { text: 'Hacer ejercicios de Platzi', completed: false },
  { text: 'Refactorizar el código', completed: true },
  { text: 'Ultimo todo', completed: true },
];
localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodo)) 

*/