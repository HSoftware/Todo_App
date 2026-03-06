import { useEffect, useState  } from "react";


// LEE LOS TODOS EN LA MEMORIA DEL NAVEGADOR
export function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = useState(initialValue)                     // Estado: inicia []
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect( () => {

    setTimeout( () => {
      try {
        const localStorageItem = localStorage.getItem(itemName)            // Busca en memoria algún item con ese nombre?
        let itemParse;                                                     // contendrá los item parseados
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))     // Si no existe item, inicializa los item vacíos 
          itemParse = initialValue                                         // en localStorage y en variable local
        } else {!loading && searchedTodos.length === 0
          itemParse = JSON.parse(localStorageItem)                         // Si existia previamente Leemos el item y parseamos
          setItem(itemParse)                                               // y actualizamos item
        }
    
        setLoading(false)                                                  // desconectamos el mensaje de cargando...
      } catch(error) {                                                     // Si hay error lo capturamos 
        setError(true)                                                     // y actualizamos el estado error
        setLoading(false)                                                  // y tambien el estado de carga
      }
    }, 2000)
  }, [])

  const saveItems = (newItem) => {                           // Graba en memoria y cambia estado de Todos
    localStorage.setItem(itemName, JSON.stringify(newItem)) 
    setItem(newItem)
  }

  return {
    item,                                                  // devolvemos el estado con los items
    saveItems,                                             // y el actualizador modificado de estado
    loading,                                               // los booleanos loading y error
    error                   
  }
}
