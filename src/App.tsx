import React, { useState } from 'react'
import Inputfeild from './components/InputFeild'
import TodoList from './components/TodoList'
import { Todo } from './model'

import './App.css'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  console.log(todo)

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }
  }
  console.log(todos)
  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <Inputfeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
