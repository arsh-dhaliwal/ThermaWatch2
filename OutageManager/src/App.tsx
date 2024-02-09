```tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import ProjectPlanning from './components/ProjectPlanning';
import TaskManagement from './components/TaskManagement';
import Communication from './components/Communication';
import Reporting from './components/Reporting';
import Integration from './components/Integration';
import Security from './components/Security';
import UserExperience from './components/UserExperience';
import TaskTemplates from './components/TaskTemplates';
import WorkOrders from './components/WorkOrders';
import Budgeting from './components/Budgeting';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/project-planning" component={ProjectPlanning} />
          <Route path="/task-management" component={TaskManagement} />
          <Route path="/communication" component={Communication} />
          <Route path="/reporting" component={Reporting} />
          <Route path="/integration" component={Integration} />
          <Route path="/security" component={Security} />
          <Route path="/user-experience" component={UserExperience} />
          <Route path="/task-templates" component={TaskTemplates} />
          <Route path="/work-orders" component={WorkOrders} />
          <Route path="/budgeting" component={Budgeting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```