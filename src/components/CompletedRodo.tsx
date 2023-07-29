import React from 'react'
import { Todo } from './model'
import { AiFillDelete } from 'react-icons/ai';


interface Props {
    todo: Todo;
    completedtodos:Todo[]
    setcompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>
  }
  
 
  const CompletedRodo: React.FC<Props> = ({ todo,completedtodos,setcompletedTodos }) => {
    const handleDelete=(id:number)=>{
        setcompletedTodos(completedtodos.filter((todo)=>todo.id!== id))
  }
    return (
      <div className="todos__single">
        <s className="todos__single--text">{todo.todo}</s>
        {/* If you want, you can add a delete button for completed tasks as well */}
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
      </div>
    )
  }
  

export default CompletedRodo
