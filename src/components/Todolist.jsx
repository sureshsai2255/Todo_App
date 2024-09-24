import Taskitem from "./Taskitem"
const TodoList = ({tasks,onEditTask}) => {
  return (
    <div className="todolist">
    <ul>
    {tasks.map((task,index)=>(
        <li key={index}>
            <Taskitem task={task} onEditTask={onEditTask}/>
        </li>
    ))}
    </ul>
    </div>
  )
}

export default TodoList