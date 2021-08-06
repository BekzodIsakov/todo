import React from 'react';
import styled from 'styled-components';

import NewTaskInput from '../../components/add-task/AddTaskInput';
import FlexContainer from '../../components/FlexContainer';
import { DashboardStyle } from './components/DashboardStyle';
import TaskList from '../../components/task-list/TaskList';

const ImportantBase = styled.div`
  ${DashboardStyle}
`;

const Important = () => {
  return (
    <ImportantBase>
      <h3>Important</h3>
        <NewTaskInput sectionName={'important'} />
        <TaskList sectionName={'important'} />
    </ImportantBase>
  );
};

export default Important;
