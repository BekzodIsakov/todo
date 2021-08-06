import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/reducers';
import { FlexContainerBase } from '../FlexContainer';
import Task from './components/Task';

interface PropTypes {
  sectionName: 'myDay' | 'planned' | 'important' | 'tasks';
}

const TaskListBase = styled(FlexContainerBase)``;

const TaskList: React.FC<PropTypes> = ({ sectionName }) => {
  const { todos } = useSelector((state: RootState) => state.todoReducer);
  const tasks = todos[sectionName];

  return (
    <TaskListBase as={'ul'} direction={'column'}>
      {Object.keys(tasks).map((key) => (
        <Task taskObj={tasks[key]} key={key} sectionName={sectionName} taskId={key}/>
      ))}
    </TaskListBase>
  );
};

export default TaskList;
