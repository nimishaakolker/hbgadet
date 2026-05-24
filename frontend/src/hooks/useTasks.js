import { useState, useEffect } from 'react'

import api from '../services/api'

const useTasks = (showToast) => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchTasks = async () => {
        setLoading(true)
        try {
            const res = await api.get('/todos?_limit=20')
            setTasks(res.data)
        } catch (err) {

            setError('Failed to fetch tasks')
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchTasks()
    }, [])

    const createTask = async(data) => {
        try {
   const res = await api.post('/todos',data)
       setTasks (prev => [{...res.data, id:Date.now() }, ...prev])
           showToast('Task created successfully!', 'success')
        }catch (err){
        setError ('Failed to create task')
          showToast('Failed to create task', 'error') 
        }
    
    
    }

    const updateTask =async (id, data)=> {
    try {
        const res = await api.put(`/todos/${id}`, data)

        setTasks(prev => prev.map(task => task.id === id ? res.data : task ))
            showToast('Task updated successfully!', 'success')
    } catch (error) {
        setError('Failed to update task')
            showToast('Failed to update task', 'error') 
    }
    }

  const deleteTask = async (id) => {
    try {
        await api.delete(`/todos/${id}`)
        setTasks(prev => prev.filter(task => task.id !== id))
            showToast('Task deleted successfully!', 'success')
    }catch (err){
        setError('Failed to delete task')
    }
  }


const toggleTask = async(id , completed) => {
try {
    const res = await api.patch(`/todos/${id}`, {completed : !completed})
    setTasks(prev => prev.map (task => task.id === id ? {...task, completed : !completed} : task))
}catch (err){
    setError('Failed to toggle task')
}
}
return { tasks, loading, error, createTask, updateTask, toggleTask,deleteTask} 
}
export default useTasks