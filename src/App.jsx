
import './App.css'
import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoList } from './components/TodoList/TodoList'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton'
import { TodoItem } from './components/TodoItem/TodoItem'

function App() {

  return (
    <div className='App'>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  )
}

export default App
