import React from 'react';

const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <form action="">
      <label>
        <input
          value={text}
          onChange={(e) => handleInput(e.target.value)}
          type="text"
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </label>
    </form>
  );
};

export default InputField;
