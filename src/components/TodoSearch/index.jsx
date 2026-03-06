import { BsSearch } from "react-icons/bs";
import styles from "./TodoSearch.module.scss"
import { useContext } from "react";
import { TodoContext } from "../TodoContext";


export function TodoSearch() {

    const {
        searchValue,
        setSearchValue,
    } = useContext(TodoContext)
    
    return (
        <div className={styles.TodoSearch}>
            <span>
                <BsSearch className={styles.IconColor}/> 
            </span>
            <input 
            className={styles.TodoSearchInput}
                type="text"
                placeholder="Busca un Todo" 
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value)
                }}    
            />
        </div>
    )
}