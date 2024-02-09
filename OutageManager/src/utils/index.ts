```typescript
// Utility functions for the OutageManager app

/**
 * Function to format date
 * @param date
 * @returns formatted date
 */
export const formatDate = (date: Date): string => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

/**
 * Function to calculate days between two dates
 * @param date1
 * @param date2
 * @returns number of days
 */
export const calculateDaysBetween = (date1: Date, date2: Date): number => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
  return diffDays;
};

/**
 * Function to check if a task is overdue
 * @param dueDate
 * @returns boolean
 */
export const isOverdue = (dueDate: Date): boolean => {
  const today = new Date();
  return dueDate < today;
};

/**
 * Function to calculate progress of a task
 * @param task
 * @returns progress in percentage
 */
export const calculateProgress = (task: any): number => {
  const totalSubtasks = task.subtasks.length;
  const completedSubtasks = task.subtasks.filter((subtask: any) => subtask.status === 'completed').length;
  const progress = (completedSubtasks / totalSubtasks) * 100;
  return progress;
};

/**
 * Function to generate a unique ID
 * @returns unique ID
 */
export const generateID = (): string => {
  return Math.random().toString(36).substr(2, 9);
};
```