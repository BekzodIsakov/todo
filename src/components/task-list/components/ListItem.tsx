import React, { useState } from 'react';
import styled from 'styled-components';

import { FlexContainerBase } from '../../FlexContainer';
import RadioButton from '../../radio-button/RadioButton';

interface PropTypes {
  taskObj: {
    name: string;
    isCompleted: boolean;
  };
}

const ListItemBase = styled(FlexContainerBase)`
  padding: 1.5rem 0;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
  user-select: none;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray50};
`;

const ListItem: React.FC<PropTypes> = ({ taskObj }) => {
  const { name, isCompleted } = taskObj;
  const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted);

  return (
    <ListItemBase
      as={'li'}
      onClick={() => setIsTaskCompleted(!isTaskCompleted)}
    >
      <RadioButton
        isChecked={isTaskCompleted}
        onClick={() => setIsTaskCompleted(!isTaskCompleted)}
      />
      {name}
    </ListItemBase>
  );
};

export default ListItem;
