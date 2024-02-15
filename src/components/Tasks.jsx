import React, { useEffect } from 'react'
import {getAlltasks} from '../redux/Actions/index';
import {useDispatch,useSelector} from 'react-redux';
import Task from './Task';



const Tasks = () => {
  const dispatch = useDispatch();
  const taskslist = useSelector(state=>state.todos);


  useEffect(()=>{
    dispatch(getAlltasks());
    console.log(taskslist,"hii")


    

  },[])
  return (
   <article>
  
   
  


    {


      taskslist.map(todo=>(
        <Task 
          key={todo._id}
          todo = {todo}
        />
      ))

      
    }
  
   
   </article>
  )
}

export default Tasks
