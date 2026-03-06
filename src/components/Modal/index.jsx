import { createPortal } from "react-dom";
import styles from "./Modal.module.scss"

export function Modal({ children }) {

    return createPortal(
        <div className={styles.ModalFondo}>
            <div className={styles.ModalContenido}>
                { children }
            </div>
        </div>, 
        document.getElementById("modal")
    )
}