//todolist,basic jsx and css from template
//links-https://github.com/Packapeer/React_tutorial_todo_App/blob/main/src/App.js
//https://github.com/Packapeer/React_tutorial_todo_App/blob/main/src/App.css
//cdn link added to app.html for button icons

import './App.css';
import {useState} from 'react'

function App() {
  const [toDos,setTodos]=useState([]) //default=empty array, state for tracking the whole list
  const [toDo,setTodo]=useState('')// to track state of a single todo while typing each letter,givin empty string
  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To-Do List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2> Hey ,  Welcome back !  🌝&nbsp;☕  </h2>
      </div>
      <div className="input">  
        <input  value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
         {/* making input a component,normal convention for one inputfield in react,onChange detects chnge in text fileld,event is an argument */}
        <i onClick={()=>{setTodos([...toDos,{id:Date.now(),text :toDo,status:false}]) 
                          setTodo('')}} className="fas fa-plus"></i>
        {/* toDo is the typed task which we supply to array one by one, so here we can spply the status too in the initial assignng^ */}
        {/* the add icon ^,sending as appended array to update the todos array state */}
        {/* can store status info too if checked or not, so converting it to object to hold value n status */}
      </div>
      {/* code to display all the todos v */}
      <div className="todos">
        {
          toDos.map((obj)=>
          {
            return(
              <div className="todo">
              <div className="left">
                <input value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
              <i onClick={(e)=>{
                setTodos(toDos.filter(obj2 => {
                  let temp;
                  if (obj2.id !== obj.id){
                    temp = obj2
                  }
                  return temp;
                }));
              }} className="fas fa-times"></i>
                {/* delete button ^ */}
              </div>
            </div>
            )
      
          }
        )}
      </div>
    </div>
  );
}

export default App;
