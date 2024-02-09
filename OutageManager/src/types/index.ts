```typescript
export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  assignee: string;
  tags: string[];
  customFields: any;
  subtasks: Task[];
  dependencies: Task[];
  recurring: boolean;
  frequency: string;
}

export interface TaskTemplate {
  id: string;
  title: string;
  description: string;
  subtasks: string[];
  dueDates: Date[];
  assignees: string[];
  tags: string[];
  customFields: any;
}

export interface WorkOrder {
  id: string;
  taskDescription: string;
  deliverables: string;
  dueDate: Date;
  requester: string;
  assignees: string[];
  status: string;
}

export interface Project {
  id: string;
  name: string;
  tasks: Task[];
  workOrders: WorkOrder[];
  budget: number;
  labor: number;
  materials: number;
  overheads: number;
  contingencies: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions: string[];
}

export interface Notification {
  id: string;
  message: string;
  read: boolean;
  timestamp: Date;
}

export interface Comment {
  id: string;
  message: string;
  author: string;
  timestamp: Date;
}

export interface File {
  id: string;
  name: string;
  type: string;
  size: number;
  lastModified: Date;
}

export interface Report {
  id: string;
  name: string;
  data: any;
  created: Date;
  lastModified: Date;
}

export interface Budget {
  id: string;
  projectId: string;
  total: number;
  used: number;
  remaining: number;
  alerts: boolean;
}

export interface AuditLog {
  id: string;
  user: string;
  action: string;
  timestamp: Date;
}

export interface Integration {
  id: string;
  name: string;
  type: string;
  connected: boolean;
}

export interface RBAC {
  id: string;
  role: string;
  permissions: string[];
}

export interface SSO {
  id: string;
  provider: string;
  connected: boolean;
}
```