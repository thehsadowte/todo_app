import React, { useState } from 'react';
import './index.css';
import TodoList from './components/TodoList.jsx';
import InputField from './components/InputField.jsx';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/TodoSlice';

export default function App() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();

    if (!text.length) return;
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}
