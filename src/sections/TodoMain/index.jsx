import styles from "./TodoMain.module.scss"
export function TodoMain({ children }) {
    return (
        <div className={styles.mainContainer}>
            { children }
        </div>
    )
}