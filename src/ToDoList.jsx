import React , {useState} from 'react'

const ToDoList = () => {

const [tasks, setTasks] = useState([])
const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
            setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t , newTask])
            setNewTask("")
        }
 
    }

    function deleteTask(index){

        const updateTasks = tasks.filter((_,i) => i !== index);
        // console.log(updatetasks)
        setTasks(updateTasks);

    }
    function MoveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index-1]] = 
            [updatedTasks[index-1] , updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function MoveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index+1]] = 
            [updatedTasks[index+1] , updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
  return (
    <div className='to-do-list'>

    <h1>A T-O-D-O</h1>
    <input type="text" placeholder='enter value' value={newTask} onChange={handleInputChange} />
    <button className='add-button' onClick={addTask}>Add</button>
    <ol>
        {tasks.map((task,i)=>
        
        <li key={i}>
            <span className='text'>{task}</span>
            <button className='delete-btn' onClick={()=>deleteTask(i)}>delete</button>
            <button className='move-btn' onClick={()=>MoveTaskUp(i)}>👆</button>
            <button className='move-btn' onClick={()=>MoveTaskDown(i)}>👇</button>
        </li>
        
        )}      
    </ol>
    </div>

  )
}

export default ToDoList