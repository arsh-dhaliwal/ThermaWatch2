import React, { useState } from 'react';
import { WorkOrder } from '../types/index';
import { createWorkOrder, getWorkOrders } from '../api/index';

const WorkOrders: React.FC = () => {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);

  const fetchWorkOrders = async () => {
    const response = await getWorkOrders();
    setWorkOrders(response.data);
  };

  const handleCreateWorkOrder = async (workOrder: WorkOrder) => {
    await createWorkOrder(workOrder);
    fetchWorkOrders();
  };

  return (
    <div>
      <h2>Work Orders</h2>
      <button onClick={fetchWorkOrders}>Refresh</button>
      <div>
        {workOrders.map((workOrder) => (
          <div key={workOrder.id}>
            <h3>{workOrder.title}</h3>
            <p>{workOrder.description}</p>
            <p>Status: {workOrder.status}</p>
            <p>Due Date: {workOrder.dueDate}</p>
            <p>Assignee: {workOrder.assignee}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkOrders;