import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Todos = function(){
    const[todos , setTodos]=   useState([]);
    
    const fetchTodos =()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))  
    }
    useEffect(()=>{
  fetchTodos()

  },[])
return(
  <div>{todos.map(todo => <div style={{paddi: 30,border: '2px solid black'}}>fdfgdy{todo.tite}</div>)}
  <h1>bfiulwgb</h1>
 
  </div>
    
)
    

}
export default Todos;