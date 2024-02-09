```tsx
import React from 'react';

interface Role {
  id: string;
  name: string;
  permissions: string[];
}

interface User {
  id: string;
  name: string;
  roles: Role[];
}

const Security: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    // Fetch users and their roles from API
    // This is a placeholder and should be replaced with actual API call
    setUsers([
      {
        id: '1',
        name: 'John Doe',
        roles: [
          {
            id: '1',
            name: 'Admin',
            permissions: ['read', 'write', 'delete'],
          },
        ],
      },
      {
        id: '2',
        name: 'Jane Doe',
        roles: [
          {
            id: '2',
            name: 'User',
            permissions: ['read'],
          },
        ],
      },
    ]);
  }, []);

  return (
    <div>
      <h1>Security and Administration</h1>
      <h2>Users and Roles</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          {user.roles.map((role) => (
            <p key={role.id}>
              Role: {role.name}, Permissions: {role.permissions.join(', ')}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Security;
```