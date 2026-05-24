import React from 'react'
import TaskForm from './TaskForm'
import { useTaskContext } from '../context/taskContext'
const TaskModal = ({ onClose }) => {
    const {selectedTask} = useTaskContext()
    return (
        <div className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center'>

            <div className='bg-white rounded-xl p-6 w-96 relative'>

                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 text-gray-700 hover:text-black '>
                    ✕
                </button>
                <h2 className='text-xl font-bold mb-4'>
                    Edit Task
                </h2>
                <TaskForm editTask={selectedTask}  onClose={onClose} />
            </div>

        </div>
    )
}

export default TaskModal
