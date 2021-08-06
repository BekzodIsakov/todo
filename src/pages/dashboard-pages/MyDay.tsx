import React from 'react';
import styled from 'styled-components';

import { DashboardStyle } from './components/DashboardStyle';
import NewTaskInput from '../../components/add-task/AddTaskInput';
import TaskList from '../../components/task-list/TaskList';

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
      <TaskList sectionName={'myDay'}/>
    </MyDayBase>
  );
};

export default MyDay;
