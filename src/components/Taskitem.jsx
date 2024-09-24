import React from 'react'
import { useContext } from 'react'
import { TaskContext } from './Todoapp'
const Taskitem = ({task,onEditTask}) => {
    const deleteTask = useContext(TaskContext)
    const handleDelete = ()=>{
        deleteTask(task.id)
    }

    const handleEdit=()=>{
        onEditTask(task);
    }
  return (
    <div className="taskItem">
       <span>{task.text}</span>
       <button className="edit" onClick={handleEdit}>Edit</button>
       <button className='delete' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Taskitem