import React from 'react'
import { useTaskContext } from '../context/TaskContext'

const ConfirmModal = ({ onClose }) => {
    const { taskToDelete, deleteTask, setTaskToDelete } = useTaskContext()

    const handleConfirm = (e) => {
        e.preventDefault();
        deleteTask(taskToDelete.id)
        setTaskToDelete(null)
    }
    return (
        <div className='fixed inset-0 bg-white z-50 flex items-center h-1/3  rounded-xl m-2 border-1 justify-center'>
            <div className=' flex gap-3 flex-col'>
                <p className='text-md font-bold p-4'>Are you sure you want to delete the message ?</p>

                <div className='flex gap-3 px-5'>
                    <button className='bg-black  text-white rounded-2xl px-2 py-1' onClick={handleConfirm}>
                        Confirm
                    </button>

                    <button className='bg-black text-white rounded-2xl px-2 py-1' onClick={onClose}>
                        Cancle
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ConfirmModal
