import React from 'react';
import styled from 'styled-components';

import NewTaskInput from '../../components/add-task/AddTaskInput';
import FlexContainer from '../../components/FlexContainer';
import { DashboardStyle } from './components/DashboardStyle';
import TaskList from '../../components/task-list/TaskList';

const PlannedBase = styled.div`
  ${DashboardStyle}
`;

const Planned = () => {
  return (
    <PlannedBase>
      <h3>Planned</h3>
        <NewTaskInput sectionName={'planned'} />
        <TaskList sectionName={'planned'} />
    </PlannedBase>
  );
};

export default Planned;
