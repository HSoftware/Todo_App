

import { TodoProvider } from "../TodoContext"
import { AppUI } from "./AppUI"

function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App

/* 
const 

defaultTodo = [
  { text: 'Aprender React', completed: false },
  { text: 'Repasar useState', completed: true },
  { text: 'Practicar useEffect', completed: false },
  { text: 'Entender useContext', completed: false },
  { text: 'Crear custom hooks', completed: true },
  { text: 'Leer documentación oficial', completed: false },
  { text: 'Hacer ejercicios de Platzi', completed: false },
  { text: 'Refactorizar el código', completed: true },
  { text: 'Ultimo todo', completed: true },
];
localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodo)) 

*/