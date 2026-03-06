import { ClipLoader} from "react-spinners"


export function TodosLoading() {
    return (
        <>
            <ClipLoader 
                color="var(--icon-color)"
                size={50}
            />
            <br />
            <p>Cargando. Por favor, espere...</p>
        </>
    )
}