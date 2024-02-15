import axios from 'axios';

import {ADDNEW_TODO} from './type';
import {GETALL_TASK} from './type';
import { TOGGLE_TASK } from './type';
import { UPDATE_TASK } from './type';
import { DELETE_TASK } from './type';


const API_URL = 'http://localhost:8000';



export const addNewTodo = (data)=>async(dispatch)=>{

    try{
       const res = await  axios.post(`${API_URL}/tasks`,{data});
       dispatch({type:ADDNEW_TODO ,payload:res.data})
    }
    catch(error){
        console.log(`Error while calling addNewTodo API`,error.message);

    }
   
}


export const getAlltasks = ()=>async(dispatch)=>{

    try{
       const res = await  axios.get(`${API_URL}/tasks`);
       dispatch({type:GETALL_TASK ,payload:res.data})
       console.log(res);
    }
    catch(error){
        console.log(`Error while calling getAllTasks`,error.message);

    }
   
}


export const toggletask = (id)=>async(dispatch)=>{

    try{
       const res = await  axios.get(`${API_URL}/tasks/${id}`);
       dispatch({type:TOGGLE_TASK,payload:res.data})
       console.log(res);
    }
    catch(error){
        console.log(`Error while calling getAllTasks`,error.message);

    }
   
}

export const updateTodo = (id,data)=>async(dispatch)=>{

    try{
       const res = await  axios.put(`${API_URL}/tasks/${id}`,{data});
       dispatch({type:UPDATE_TASK,payload:res.data})
       console.log(res);
    }
    catch(error){
        console.log(`Error while calling update task`,error.message);

    }
   
}

export const deletetask= (id)=>async(dispatch)=>{

    try{
       const res = await  axios.delete(`${API_URL}/tasks/${id}`);
       dispatch({type:DELETE_TASK,payload:res.data})
   
    }
    catch(error){
        console.log(`Error while calling getAllTasks`,error.message);

    }
   
}