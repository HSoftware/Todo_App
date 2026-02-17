import { BsSearch } from "react-icons/bs";
import styles from "./TodoSearch.module.scss"
import { useState } from "react";


export function TodoSearch({ searchValue, setSearchValue }) {
    
    return (
        <div className={styles.TodoSearch}>
            <span>
                <BsSearch />
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