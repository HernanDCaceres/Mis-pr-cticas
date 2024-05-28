import { useSelector } from 'react-redux'

import TodoList from './components/TodoList/TodoList'
import style from './App.module.css'

import CreateTodo from './components/createTodo/CreateTodo';

function App() {
  const todos = useSelector((state) => state.todos)

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3>CreateTodo</h3>
          <CreateTodo/>
        </div>
        <div>
          <h3>Todo List</h3>
          {todos.length === 0 && <p>No todos</p>}
          <TodoList todos = {todos} />
      </div>
    </div>
  )
}

export default App
