import React, { useEffect, useState } from 'react'

import './App.css'
import InputField from './components/InputField'
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App:React.FC=() => {
  const[todo,setTodo]=useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load todos from local storage when the app initializes
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [completedtodos, setCompletedTodos] = useState<Todo[]>(() => {
    // Load todos from local storage when the app initializes
    const storedTodos = localStorage.getItem('completedtodos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  useEffect(() => {
    // Save todos to local storage whenever it changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos,completedtodos]);
  const handleAdd =(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos , {id:Date.now(),todo,isDone:false}])
      setTodo("")
    }
  }
  return <div className="App">
     <span className="heading">Monumentum</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <TodoList todos={todos} setTodos={setTodos} completedtodos={completedtodos} setcompletedTodos={setCompletedTodos}/>
    
  </div>
}

export default App
