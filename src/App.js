
import './App.css';
import { useState } from "react";
import { Task } from './Task';



function App() {

const  [todoList, setTodoList] = useState([]);
const [ newTask, setNewTask] = useState("");
// const [dele, setDele] = useState()

const handleChange = (event) => {
  setNewTask(event.target.value)
};

const addTask = () => {
  const task ={
    id: todoList.length === 0 ? 1 : todoList[todoList.length - 1] + 1,
    taskName : newTask,
    complete : false
  }

  //  const newTodoList = [...todoList, newTask];
   setTodoList( [...todoList, task])
  //  setTodoList(newTodoList)
};
const deleteTask = (id) => {
  setTodoList(todoList.filter((task) => task.id !== id));
}

const completeTask = (id) =>{
  setTodoList(
    todoList.map((task) => {
      if(task.id === id){
        return {...task, complete: true};
      }else{
        return task;
      }
    })
  )
}


  return (
    <div className="App">
      <div className='addTask'>
        <input  onChange={handleChange}/>
         <button onClick={addTask}>Add Task</button>
         <button onClick={completeTask}></button>
        </div>
        <div className='list'>
          {todoList.map((task) =>{
            return <Task 
                     taskName={task.taskName} 
                     id={task.id}
                     complete={task.completed}
                     deleteTask={deleteTask}
                     completeTask={completeTask}/>
          })}
        </div>
    </div>
  );
}

export default App;
