import { TodoMain } from '../../sections/TodoMain'
import { TodoAside } from '../../sections/TodoAside'
import { TodoBody } from '../../sections/TodoBody'
import { TodoHeader } from '../../sections/TodoHeader'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoItem } from '../TodoItem'
import { TodoFooter } from '../../sections/TodoFooter'

import styles from "./App.module.scss"


export function AppUI({
    loading,
    error,
    completedTodos, 
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    

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
                    {loading && <p>Cargando. Espere un momento...</p>}
                    {error && <p>Error. Problemas al cargar los datos</p>}
                    {(!loading && searchedTodos.length === 0) && <p>Comienza a crear TODOS...</p>}

                    {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text}
                        text={todo.text}                           //
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
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
