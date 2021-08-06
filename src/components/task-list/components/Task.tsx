import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { completeTodo } from '../../../services/todos';
import { sectionTypes } from '../../../store/actions/Todo';

import { FlexContainerBase } from '../../FlexContainer';
import RadioButton from '../../radio-button/RadioButton';

interface PropTypes {
  taskObj: {
    name: string;
    isCompleted: boolean;
  };
  sectionName: sectionTypes;
  taskId: string;
}

const TaskBase = styled(FlexContainerBase)`
  padding: 1.5rem 0;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
  user-select: none;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray50};
`;

const Task: React.FC<PropTypes> = ({ taskObj, sectionName, taskId }) => {
  const { name, isCompleted } = taskObj;
  const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    setIsTaskCompleted(!isTaskCompleted);
    dispatch(completeTodo(sectionName, name, taskId, !isTaskCompleted));
  };

  return (
    <TaskBase
      as={'li'}
      onClick={() => {
        handleOnClick();
      }}
    >
      <RadioButton isChecked={isTaskCompleted} />
      {name}
    </TaskBase>
  );
};

export default Task;
