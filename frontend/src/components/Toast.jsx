import React from 'react'
import { useTaskContext } from '../context/taskContext'

const Toast = () => {
    const { toast} = useTaskContext()

    if(!toast) return null

  return (
    <div className={`fixed bottom-4 right-4 z-50 px-4 py-2 rounded-xl text-white ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
      {toast.message}
    </div>
  )
}

export default Toast
