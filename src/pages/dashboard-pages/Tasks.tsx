import React from 'react';
import styled from 'styled-components';

import NewTaskInput from '../../components/add-task/AddTaskInput';
import FlexContainer from '../../components/FlexContainer';
import { DashboardStyle } from './components/DashboardStyle';
import TaskList from '../../components/task-list/TaskList';

const TasksBase = styled.div`
  ${DashboardStyle}
`;

const Tasks = () => {
  return (
    <TasksBase>
      <h3>Tasks</h3>
        <NewTaskInput sectionName={'tasks'} />
        <TaskList sectionName={'tasks'} />
    </TasksBase>
  );
};

export default Tasks;
