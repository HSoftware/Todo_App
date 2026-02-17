
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
  const [todos, setTodos] = useState(defaultTodos)         // Estado con los Todos
  const [searchValue, setSearchValue] = useState("")       // Estado que guarda el valor del input search

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
                text={todo.text} 
                completed={todo.completed} />
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
