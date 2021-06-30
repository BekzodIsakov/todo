import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/reducers';
import { FlexContainerBase } from '../FlexContainer';
import ListItem from './components/ListItem';

interface PropTypes {
  propertyName: 'myDay' | 'planned' | 'important' | 'tasks';
}

const TaskListBase = styled(FlexContainerBase)``;

const TaskList: React.FC<PropTypes> = ({ propertyName }) => {
  const { todos } = useSelector((state: RootState) => state.todoReducer);
  const tasks = todos[propertyName];

  return (
    <TaskListBase as={'ul'} direction={'column'}>
      {Object.keys(tasks).map((key) => (
        <ListItem taskObj={tasks[key]} key={key} />
      ))}
    </TaskListBase>
  );
};

export default TaskList;
