import React from 'react'
import './styles.css'
import { Todo } from './model'
import SingleTodo from './SingleTodo'
import CompletedRodo from './CompletedRodo'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  setcompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedtodos: Todo[]
}
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  setcompletedTodos,
  completedtodos,
}) => {
  const handleDone = (id: number) => {
    const completedTodo = todos.find((todo) => todo.id === id)
    if (completedTodo) {
      setcompletedTodos([...completedtodos, completedTodo])
      setTodos(todos.filter((todo) => todo.id !== id))
    }
  }
  // const handleDone = (id: number) => {
  //   setcompletedTodos([...completedtodos, ...todos.filter((todo) => todo.id === id)]);
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };
  
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
            onhandleDone={handleDone}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {completedtodos.map((todo) => (
          <CompletedRodo
            todo={todo}
            completedtodos={completedtodos}
            key={todo.id}
            setcompletedTodos={setcompletedTodos}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList
