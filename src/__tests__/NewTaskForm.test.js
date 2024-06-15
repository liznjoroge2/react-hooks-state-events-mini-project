import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  const handleTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setTaskCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      text: taskText,
      category: taskCategory
    };
    onTaskFormSubmit(newTask);
    setTaskText('');
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task details"
        value={taskText}
        onChange={handleTextChange}
      />
      <select value={taskCategory} onChange={handleCategoryChange}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
