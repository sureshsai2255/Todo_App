import Add from "./Add";
import TodoList from "./TodoList";
import { useState } from "react";
import { createContext } from "react";

export const TaskContext = createContext();
let nextId=0;
const initialTasks = [] ;
const Todoapp = () => {
    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTask(text){
        setTasks([...tasks,
            {
                id:nextId++,
                text:text
            }])
    }

    function handleDeleteTask(taskId){

        setTasks(tasks.filter((t)=>t.id!==taskId))
    }

    function hanldeChangeTask(task){
        setTasks(tasks.map((t)=>{
            if(t.id===tasks.id){
                return task;
            }
            else{
                return t
            }
        }))

    }
  return (
    <div>
        <TaskContext.Provider value={handleDeleteTask}>
        <Add addTask={handleAddTask}/>
        <TodoList tasks={tasks} onEditTask={hanldeChangeTask}/>
        </TaskContext.Provider>
    </div>
  )
}

export default Todoapp