import { BsCheck2Circle, BsFileExcel } from "react-icons/bs";
import styles from "./TodoIcon.module.scss"


    export function TodoIcon({ type, color, onClick }) {
    const iconType = {
        "check": (color) => <BsCheck2Circle 
            fill={color} 
            onClick={onClick} 
        />,
        "delete": (color) => <BsFileExcel 
            className={`${styles[`icon--delete`]}`} 
            fill={color} 
            onClick={onClick}
        />
    }

        return (
            <span className={`${styles.icon}`}>
                {iconType[type](color)}
            </span>
        )
    }