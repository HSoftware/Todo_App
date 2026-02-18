
import styles from "./App.module.scss"

import { TodoMain } from './sections/TodoMain/TodoMain'
import { TodoAside } from './sections/TodoAside/TodoAside'
import { TodoBody } from './sections/TodoBody/TodoBody'
import { TodoHeader } from './sections/TodoHeader/TodoHeader'
import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoList } from './components/TodoList/TodoList'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton'
import { TodoItem } from './components/TodoItem/TodoItem'
import { TodoFooter } from './sections/TodoFooter/TodoFooter'
import { useState } from 'react'




const defaultTodos = [
  { text: 'Aprender React', completed: false },
  { text: 'Repasar useState', completed: true },
  { text: 'Practicar useEffect', completed: false },
  { text: 'Entender useContext', completed: false },
  { text: 'Crear custom hooks', completed: true },
  { text: 'Leer documentación oficial', completed: false },
  { text: 'Hacer ejercicios de Platzi', completed: false },
  { text: 'Refactorizar el código', completed: true },
];


function App() {

  const [theme, setTheme] = useState("dark")
  const [todos, setTodos] = useState(defaultTodos)         // Listado con la totalidad de los Todos
  const [searchValue, setSearchValue] = useState("")       // Valor del input de la búsqueda

  // Estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

   
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return (
      todoText.includes(searchText)
    )
  })
  
  // Funciones
  const completeTodo = (text) => {                         // Actualiza lista de Todos. text es el identificador (key) del Todo
    console.log("Texto de entrada", text)
    const newTodos = [...todos]                            // Crea una copia de los Todos
    const todoIndex = newTodos.findIndex((todo) => (       // Encuentra el indice del todo correspondiente
      todo.text == text
    ))
    newTodos[todoIndex].completed = true                   // Cambia a completado el todo elegido
    setTodos(newTodos)                                     // Actualiza la todalidad de Todos
  }

  return (
    <div className={styles.application}>
      <TodoHeader /> 
      <TodoMain>
        <TodoAside />

        <TodoBody>
          <TodoCounter completed={completedTodos} total={totalTodos}/>
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <TodoList>
            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text}
                text={todo.text}                           //
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
               />
            ))}
          </TodoList>

          <CreateTodoButton />
        </TodoBody>
      </TodoMain>
      <TodoFooter /> 
    </div>
  )
}

export default App
