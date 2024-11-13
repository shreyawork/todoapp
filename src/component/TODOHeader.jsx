import React,{useState} from "react";
import todo from "../image/todo.jpg";
const TODOHeader = () => {
  const [taskInput, setTaskInput] = useState('');

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New task:', taskInput);
    setTaskInput(''); 
   };

  return (
   <header>
    <img src={todo} alt="TODO list"  className='image'></img>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
      </form>
    </header>
  );
}

export default TODOHeader;