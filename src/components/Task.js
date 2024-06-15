import React from 'react';

function Task({ task, onDeleteTask }) {
  const handleDelete = () => {
    onDeleteTask(task);
  };

  return (
    <div className="task">
      <span>{task.text}</span>
      <span>{task.category}</span>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
