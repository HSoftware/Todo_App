import { TodoIcon } from "../../TodoIcon"

export function CloseIcon({ onClose }) {

    return (
        <TodoIcon 
            type="close" 
            color="white"
            onClick={onClose}
        />
    ) 
}