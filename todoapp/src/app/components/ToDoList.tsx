import React from 'react'
import { Todo } from '../../types'

interface ToDoListProps {
  todos: Todo[]
}

const ToDoList = ({ todos }: ToDoListProps) => {



  return (
    <div>
      {todos.map((todo) => (
        <div className='ToDoList-main'>
          <span key={todo.id}>{todo.text}</span>
          <div className='buttonContainer'>
            <button className='editButton'>edit</button>
            <button className='deleteButton'>delete</button>
          </div>
        </div>))}
    </div>
  )
}

export default ToDoList