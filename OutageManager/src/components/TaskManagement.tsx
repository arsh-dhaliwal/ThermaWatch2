```tsx
import React, { useState } from 'react';
import { Task } from '../types/index';

const TaskManagement: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const assignTask = (taskId: string, assignee: string) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, assignee } : task));
  };

  const setDueDate = (taskId: string, dueDate: Date) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, dueDate } : task));
  };

  const createSubtask = (taskId: string, subtask: Task) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, subtasks: [...task.subtasks, subtask] } : task));
  };

  return (
    <div>
      <h1>Task Management</h1>
      {/* Task creation and management UI goes here */}
    </div>
  );
};

export default TaskManagement;
```