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

import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { TodosEmpty } from '../TodosEmpty'

import { TodoContext } from '../TodoContext'

import styles from "./App.module.scss"
import { useContext } from 'react'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'


export function AppUI() {

    const {
        theme,
        setTheme, 
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        closeModal,
        setOpenModal,
    } = useContext(TodoContext)             // Traemos del contexto las props que requiere el componente
    
    return (
        <div className={styles.application}>
            <TodoHeader theme = {theme} setTheme= {setTheme} /> 
            <TodoMain>
                {/* <TodoAside /> */}

                <TodoBody>
                    <TodoCounter />
                    <TodoSearch />

                    <TodoList>
                        {loading && <TodosLoading />}
                        {error && <TodosError />}
                        {(!loading && searchedTodos.length === 0) && <TodosEmpty />}

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

                    {openModal && (
                        <Modal>
                            <TodoForm 
                                onClose={() => closeModal()}
                            />
                        </Modal>
                    )}
                </TodoBody>
            </TodoMain>
            <TodoFooter /> 
        </div>
    )
}
