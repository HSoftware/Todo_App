import styles from "./TodoHeader.module.scss"

export function TodoHeader({ theme, setTheme }) {
    return (
        <div className={`${styles.headerContainer}`}>
            <h1>Task Manager</h1>
            <button
                onClick={() => {theme === "light" ? setTheme("dark") : setTheme("light")}}
            >
                tema: {theme}
            </button>
        </div>
    )
}