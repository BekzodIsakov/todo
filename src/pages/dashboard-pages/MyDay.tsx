import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { DashboardStyle } from './components/DashboardStyle';
import NewTaskInput from '../../components/add-task/AddTaskInput';
import FlexContainer from '../../components/FlexContainer';
import TaskList from '../../components/task-list/TaskList';
import { RootState } from '../../store/reducers';

interface PropTypes {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

const MyDayBase = styled.div`
  ${DashboardStyle}
`;

const day: number = new Date().getDay();
const date: number = new Date().getDate();
const month: number = new Date().getMonth();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const MyDay: React.FC<PropTypes> = () => {
  return (
    <MyDayBase>
      <h3>My Day</h3>
      <span>
        {days[day]}, &nbsp;
        {months[month]} &nbsp;
        {date}
      </span>
      <NewTaskInput sectionName={'myDay'} />
      <TaskList propertyName={'myDay'}/>
    </MyDayBase>
  );
};

export default MyDay;
