import React from 'react'
import { useTaskContext } from '../context/taskContext'

const TaskCard = ({task, deleteTask, updateTask, toggleTask}) => {
   const {setSelectedTask, setTaskToDelete} = useTaskContext()
  return (
    <div className='p-2 border-1 bg-white rounded-xl m-2'>
  
     <h3 className='font-md text-bold'>{task.title}</h3>
     <div className='flex gap-2 m-3'>

     
     <button
     className='px-2 py-1 bg-black text-white rounded '
   onClick={() => setTaskToDelete(task)}  
     >
        Delete
     </button>

     <button
     className='px-2 py-1 bg-black text-white rounded '
     onClick={() =>{ 
      setSelectedTask(task)
     }}>
        Edit
     </button>

     <button
     className='px-2 py-1 bg-black text-white rounded '
     onClick={() => toggleTask(task.id, task.completed)}>
        {task.completed ? 'Completed' : 'Pending'}
     </button>
</div>
    </div>
  )
}

export default TaskCard
