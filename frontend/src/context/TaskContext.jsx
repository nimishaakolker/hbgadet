import { createContext } from "react";
import useTasks from '../hooks/useTasks'
const TaskContext = createContext()
import { useContext } from "react";
import { useState } from 'react'


export const TaskProvider = ({ children }) => {

  const [selectedTask, setSelectedTask] = useState(null)
  const [toast, setToast] = useState(null)
  const [taskToDelete, setTaskToDelete] = useState(null)

  const showToast = (message, type) => {
    setToast({message, type})
    setTimeout(() => setToast(null), 3000)
  }
    const { tasks, loading, error, createTask, updateTask, deleteTask, toggleTask } = useTasks(showToast)

  return (
    <TaskContext.Provider value={{ tasks, loading, error, createTask, updateTask, deleteTask, toggleTask, selectedTask, setSelectedTask,toast, showToast, setTaskToDelete, taskToDelete }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => {
  return useContext(TaskContext)
}