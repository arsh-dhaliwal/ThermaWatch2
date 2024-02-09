```typescript
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const createTask = async (taskData: any) => {
  return await axios.post(`${API_BASE_URL}/tasks`, taskData);
};

export const getTasks = async () => {
  return await axios.get(`${API_BASE_URL}/tasks`);
};

export const updateTask = async (taskId: string, updatedData: any) => {
  return await axios.put(`${API_BASE_URL}/tasks/${taskId}`, updatedData);
};

export const deleteTask = async (taskId: string) => {
  return await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
};

export const createWorkOrder = async (workOrderData: any) => {
  return await axios.post(`${API_BASE_URL}/workOrders`, workOrderData);
};

export const getWorkOrders = async () => {
  return await axios.get(`${API_BASE_URL}/workOrders`);
};

export const updateWorkOrder = async (workOrderId: string, updatedData: any) => {
  return await axios.put(`${API_BASE_URL}/workOrders/${workOrderId}`, updatedData);
};

export const deleteWorkOrder = async (workOrderId: string) => {
  return await axios.delete(`${API_BASE_URL}/workOrders/${workOrderId}`);
};

export const setProjectBudget = async (projectId: string, budgetData: any) => {
  return await axios.post(`${API_BASE_URL}/projects/${projectId}/budget`, budgetData);
};

export const getProjectBudget = async (projectId: string) => {
  return await axios.get(`${API_BASE_URL}/projects/${projectId}/budget`);
};

export const updateProjectBudget = async (projectId: string, updatedBudgetData: any) => {
  return await axios.put(`${API_BASE_URL}/projects/${projectId}/budget`, updatedBudgetData);
};
```