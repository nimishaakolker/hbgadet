import { useState } from 'react'
import { useTaskContext } from '../context/TaskContext'
import Loader from './Loader'
import TaskCard from './TaskCard'

const TaskList = () => {
    const {tasks, loading, error, createTask ,toggleTask, deleteTask, updateTask} = useTaskContext()

    const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState('all')

        const filteredTasks = tasks
  .filter(task => {
    if(filter === 'all') return true
    if(filter === 'completed') return task.completed === true
    if(filter === 'pending') return task.completed === false
  })  .filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()))

  
if(loading) return <Loader/>
if(error) return <p className='text-center text-red-500'>{error}</p>

if(tasks.length === 0) return <p className='text-center'> No tasks found</p>

  return (
  <>
<div className='flex gap-2 p-4'>
  <input
    type='text'
    placeholder='Search tasks...'
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className='border rounded-xl px-3 py-1 w-full'
  />
</div>

<div className='flex gap-2 px-4 pb-4'>
  {['all', 'completed', 'pending'].map(f => (
    <button
      key={f}
      onClick={() => setFilter(f)}
      className={`px-3 py-1 rounded-xl capitalize ${filter === f ? 'bg-black text-white' : 'bg-white'}`}
    >
      {f}
    </button>
  ))}
</div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>



      {filteredTasks.map (task => (
       
       
        <div 
        key={task.id}>
              <TaskCard task={task}
              deleteTask=
              {deleteTask}
              updateTask={updateTask}
              toggleTask={toggleTask} ></TaskCard>
        </div>

      
      ))}
    </div>
      </>
  )

}

export default TaskList
