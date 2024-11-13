import React, { useState } from 'react';
import TODOHeader from './TODOHeader';
import TODOItem from './ToDoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faEdit,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
const defaultTasks = [
    { id: self.crypto.randomUUID(), text: 'Enjoy a cup of coffee' },
    { id: self.crypto.randomUUID(), text: 'build a task managment app' },
];

function TODOList() {
    const [tasklist, setTasklist] = useState(defaultTasks);
    const [taskInput, setTaskInput] = useState("");
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };
// handle add a new task
  
const handleAddTask=()=>{
        if (taskInput.trim()){
            if(taskToUpdate){
            setTasklist((prevTaskList)=>
                prevTaskList.map((task) =>
                task.id ===taskToUpdate.id
        ?{...task,text:taskInput}
        :task
              )
            );
            setTaskToUpdate(null);//reset editing task
            
        }else{
            //add new task
            setTasklist((prevTaskList) =>[
                ...prevTaskList,
                {id:self.crypto.randomUUID(),text:taskInput},
            ]);
        }
        setTaskInput(''); //clear input after adding /updating
    }
};
    //handle delete task
    const handleDeleteTask = (taskID) => {
        setTasklist((prevTaskList) =>
             prevTaskList.filter((task) => task.id !== taskID));
    };
    //handle edit task
     const handleEditTask = (task) => {
        setTaskInput(task.text);//Set input files with task text
        setTaskToUpdate(task);//set task to be updated
    };
    return (
        <section className="Task-list" aria-label="task management interface">
            <TODOHeader />
            <div className='task-input-container'>
                <input
                    type="text"
                    required
                    placeholder={taskToUpdate ? 'update task' :'type a new task'}
                    value={taskInput}
                    aria-label="Task description"
                    onChange={handleInputChange} 
                    />
                <button
                    className="add-task-button"
                     aria-label={taskToUpdate?'update task' : 'Add new task'}
                     type='button'                       
                     onClick={handleAddTask}
            >
                   <FontAwesomeIcon icon ={taskToUpdate ?faEdit :faPlus}/>

                </button>
           </div>
            <ol id="task-list" aria-live="polite">
                {tasklist.map((task) => (
                    <TODOItem
                        key={task.id}
                        task={task}
                        deleteTaskCallback={() => handleDeleteTask(task.id)}
                       editTaskCallback={() => handleEditTask(task)}

                        />
                ))}
            </ol>
        </section>
    );
}

export default TODOList;