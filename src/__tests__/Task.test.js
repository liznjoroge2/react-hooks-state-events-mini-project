import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Task from '../components/Task';
import { TASKS } from '../data/data'; // Correct path to data file

test('renders task correctly', () => {
  const task = TASKS[0];
  const { getByText } = render(<Task task={task} onDeleteTask={() => {}} />);

  expect(getByText(task.text)).toBeInTheDocument();
  expect(getByText(task.category)).toBeInTheDocument();
});

test('calls onDeleteTask when delete button is clicked', () => {
  const task = TASKS[0];
  const onDeleteTask = jest.fn();
  const { getByText } = render(<Task task={task} onDeleteTask={onDeleteTask} />);

  fireEvent.click(getByText('X'));

  expect(onDeleteTask).toHaveBeenCalledWith(task);
});
