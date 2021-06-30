import { useSelector } from 'react-redux';
import { RootState } from './store/reducers';

export const generateId = (): string => {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

export const GetTaskQuantity = (sectionName: string) => {
  const {todos} = useSelector((state:RootState) => state.todoReducer);
  let value = Object.keys(todos[sectionName]).length;
  if (value) return value;
}
