import styles from "./TodoList.module.scss"

export function TodoList(props) {
    return (
        <div className={styles.todoList}>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}