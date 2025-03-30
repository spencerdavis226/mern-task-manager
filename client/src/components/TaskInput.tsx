import React, { useState } from 'react';

interface TaskInputProps {
  addTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      addTask(input);
      setInput('');
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor="taskInput" className="form-label">
        New Task
      </label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="taskInput"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
