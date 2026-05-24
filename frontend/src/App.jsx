import React from 'react'
import { TaskProvider, useTaskContext } from './context/TaskContext'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskModal from './components/TaskModal'
import Toast from './components/Toast'
import ConfirmModal from './components/ConfirmModal'


const AppContent = () => {
const {selectedTask, setSelectedTask, setTaskToDelete, taskToDelete} = useTaskContext()
  return (
    <div className='bg-[#d8d1d1fb] w-full min-h-screen'>
      <h1 className='text-2xl p-2 font-extrabold text-center'>Task Manager</h1>
  {selectedTask && (
<TaskModal onClose={() => setSelectedTask(null)}/>
  )}

  {taskToDelete && <ConfirmModal onClose ={() => setTaskToDelete(null)} />}
  <Toast/>
  <TaskForm/>
  <TaskList />

    </div>
  )
}

const App = () => {
  return(
    <TaskProvider>
      <AppContent></AppContent>
    </TaskProvider>
  )
}

export default App
