import styles from "./TodoBody.module.scss"

export function TodoBody({ children }) {
    return (
        <div className={styles.bodyContainer}>
            { children }
        </div>
    )
}