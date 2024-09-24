import { useState } from "react"

const Add = ({addTask}) => {
    const[text, setText] = useState('');

    const handleSubmit=(e)=>{
      e.preventDefault();
     if(text===''){
        alert("Pleaase add a task")
     }
     else{
        addTask(text)
        setText('')
     }
    }

    const handleChange=(e)=>{
       setText(e.target.value)
    }

  return (
    <div className="add">
       <form onSubmit={handleSubmit}>
       <input type="text" value={text}  onChange={handleChange}/>
       <button type="submit">Add</button>
       </form>
    </div>
  )
}

export default Add