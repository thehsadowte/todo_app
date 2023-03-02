import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = ({ removeTodo, toggleTodoComplete }) => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
