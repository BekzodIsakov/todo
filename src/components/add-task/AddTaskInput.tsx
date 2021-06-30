import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { generateId } from '../../utils';
import { addTodo } from '../../services/todos';
import { sectionTypes } from '../../store/actions/Todo';
import {
  AddButton,
  IconButton,
  Input,
  PlusIcon,
  CircleIcon,
} from './components';

interface PropTypes {
  sectionName: sectionTypes 
};

const AddTaskInputBase = styled.div`
  width: 100%;
  position: relative;
`;

function useClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  setIsPlusIcon: (value: boolean) => void
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsPlusIcon(true);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

// The main structure of this component is not well built even though it does the job.
// Ideally, the whole component should be a grid component that wraps components such as <IconButton />, <InputField /> and <AddButton />
const AddTaskInput: React.FC<PropTypes> = ({ sectionName }) => {
  const [isPlusIcon, setIsPlusIcon] = useState(true);
  const [inputValue, setInputValue] = useState<string>('');

  const ComponentRef = useRef<HTMLDivElement>(null);
  const InputRef = useRef<HTMLInputElement>(null);
  
  const dispatch = useDispatch();

  const addNewTodo = () => {
    const newId = generateId();
    dispatch(addTodo(sectionName, inputValue, newId));
  };


  useClickOutside(ComponentRef, setIsPlusIcon);

  const handleButtonClick = () => {
    setIsPlusIcon(!isPlusIcon);
    if (!InputRef.current) return;
    if (isPlusIcon) InputRef.current.focus();
    if (inputValue) {
      addNewTodo();
      setInputValue('');
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOnClick = () => {
    if (inputValue) {
      addNewTodo();
    }
    setInputValue('');
  };

  const handleOnEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputValue) {
        addNewTodo();
      }
      setInputValue('');
    }
  };

  return (
    <AddTaskInputBase ref={ComponentRef}>
      <IconButton onClick={handleButtonClick}>
        {isPlusIcon ? <PlusIcon /> : <CircleIcon />}
      </IconButton>
      <Input
        ref={InputRef}
        value={inputValue}
        placeholder={'Add a task'}
        onClick={() => setIsPlusIcon(false)}
        onKeyPress={handleOnEnterPress}
        onChange={(e) => handleOnChange(e)}
      />
      <AddButton isVisible={!!inputValue} onClick={handleOnClick}>
        ADD
      </AddButton>
    </AddTaskInputBase>
  );
};

export default AddTaskInput;
