import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  const [todos , setTodos] = useState([])
 const checkTodo =(id) =>
 {
  console.log(id);
  setTodos(todos.map(todo =>{
    if(todo.id === id)
    {
      todo.isCompleted = !todo.isCompleted
    }
      console.log(todo.isCompleted);
      return todo;
    
  }))

 }
 const deleteTodo =(id) =>
 {
  setTodos(todos.filter(todo => todo.id!=id))

 }

  const addTodo =(text)=>
  {
    const newTodo ={
      id:uuid(),
      title:text,
      isCompleted:''
    }
    setTodos([...todos , newTodo])
    console.log(newTodo);
  }
  return ( 
    <div className="App">
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
