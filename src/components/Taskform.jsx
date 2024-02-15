import React from 'react'
import '../components/Taskform.css'

import { useState } from 'react';
import {useDispatch} from "react-redux";
import { addNewTodo } from '../redux/Actions';

const Taskform = () => {
    const [text,setText] = useState("");
    const dispatch = useDispatch();




    const onformSubmit=(e)=>{
        e.preventDefault();
        dispatch(addNewTodo(text))
        setText(' ')

    }

    const oninputChange=(e)=>{
        console.log(e.target.value)
        setText(e.target.value);
        

    }
  return (
   <form className='form' onSubmit={onformSubmit}>
    <input placeholder='Enter Your Task'
        className='input'
     
        onChange={oninputChange}
        value={text}
    />
   </form>
  )
}

export default Taskform