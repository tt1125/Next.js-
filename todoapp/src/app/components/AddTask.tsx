"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { addTodo } from '../../api'
import {v4 as uuidv4} from 'uuid'

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("")
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await addTodo({ id: uuidv4, text: taskTitle })
    setTaskTitle("")

  }

  return (
    <form className='AddTask-form' onSubmit={handleSubmit}>
      <input
        type="text"
        className='AddTask-input'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
        value={taskTitle} />
      <button className='AddTask-button'>Add Task</button>
    </form>
  )
}

export default AddTask