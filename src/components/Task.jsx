import React from 'react'
import { useState } from 'react'
import '../components/task.css'
import {toggletask,updateTodo,deletetask} from "../redux/Actions"
import { useDispatch } from 'react-redux'

const Task = ({todo}) => {
    const [edit,setEdit] = useState(false);
    const [text,settext] = useState()





    const dispatch = useDispatch();

    const onFormSubmit = (e)=>{
        e.preventDefault();
        setEdit(prevstate=>!prevstate)
        dispatch(updateTodo(todo._id,text))

    }
  return (
    <div className="mytask">
    <div className='task' onClick={()=>dispatch(toggletask(todo._id))}
    style={{
        textDecoration:todo.done?'line-through':''
    }}
    >
        <span  style ={{ display: edit ? 'none':''}}>{todo.data} </span>

        <form  style ={{ display: edit ? 'inline':'none'}} onSubmit={onFormSubmit}>
            <input type= "text" value ={text} className = "edit-task" onChange={(e)=>settext(e.target.value)} />
        </form>
        <span className='icon' onClick={()=>dispatch(deletetask(todo._id))}><i className='fas fa-trash'/></span>
        <span className='icon' onClick={()=>setEdit((prevstate)=>!prevstate)}><i className='fas fa-pen'/></span>
    </div>
    </div>

  )
}

export default Task;