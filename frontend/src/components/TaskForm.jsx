import React, { useState, useEffect } from 'react'
import { useTaskContext } from '../context/taskContext'

const TaskForm = ({ editTask, onClose }) => {
    const [title, setTitle] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)
    const [titleError, setTitleError] = useState('')

    const { createTask, updateTask } = useTaskContext()
    const handleSubmit = (e) => {
        e.preventDefault()

        if (title.trim() === '') {
            setTitleError('Title should not be empty')
            return
        }
        if (title.trim().length < 3) {
            setTitleError('Minimum 3 characters are required')
            return
        }
        if (editTask) {
            updateTask(editTask.id, { title, completed: isCompleted })
            onClose?.()
        } else {
            createTask({ title, completed: isCompleted })
            setTitle('')
        }
        setTitle('')

    }
    useEffect(() => {
        if (editTask) {
            setTitle(editTask.title)
            setIsCompleted(editTask.completed)
        }
    }, [editTask])


    return (
        <div className='m-4 p-4 bg-white rounded-2xl  '>
            <form
                onSubmit={handleSubmit}>
                <div className='flex gap-4'>
                    <input className=' cursor-pointer rounded-xl px-2 py-1 outline-1'
                        type="text"
                        placeholder='Enter title'
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                            setTitleError('')
                        }}
                    />

                    <button
                        className='px-2 py-1 bg-black text-white rounded-xl '
                    >Add task</button>
                </div>

                {titleError && <p className='text-red-500 text-sm mt-1'>{titleError}</p>}
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                />

            </form>

        </div>
    )
}

export default TaskForm
