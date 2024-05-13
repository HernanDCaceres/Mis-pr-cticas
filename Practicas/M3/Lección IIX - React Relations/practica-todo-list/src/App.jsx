import { useState } from 'react'
import './App.css'
import AddToDO from './AddToDo';
import ToDoCounter from './ToDoCounter';
import ToDoList from './ToDoList';

function App() {
  const [todos, setTodos] = useState(['tarea 1', 'Tarea 2', 'Tarea 3']);
  return (
    <div>
      <AddToDO setTodos = {setTodos}></AddToDO>
      <br/>
      <ToDoCounter todos={todos}/>
      <br/>
      <ToDoList todos={todos}/>
    </div>
  )
}

export default App
