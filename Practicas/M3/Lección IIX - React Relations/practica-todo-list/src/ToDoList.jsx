import { useState } from "react"

const ToDoList = () => {
    const [todos, setTodos] = useState(['Tarea 1', 'Tarea 2', 'Tarea 3']);

    return (
        <ul>
            {todos.map((tarea) => {
                return <li key={tarea}>{tarea}</li>
            })}
        </ul>
    )
}

export default ToDoList;