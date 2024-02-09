```tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Budget } from '../types/index';

const Budgeting: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const response = await axios.get('/api/budgets');
      setBudgets(response.data);
    } catch (error) {
      console.error('Error fetching budgets', error);
    }
  };

  return (
    <div>
      <h2>Budget Dashboard</h2>
      {budgets.map((budget) => (
        <div key={budget.id}>
          <h3>{budget.projectName}</h3>
          <p>Allocated Budget: {budget.allocated}</p>
          <p>Used Budget: {budget.used}</p>
          <p>Remaining Budget: {budget.remaining}</p>
        </div>
      ))}
    </div>
  );
};

export default Budgeting;
```