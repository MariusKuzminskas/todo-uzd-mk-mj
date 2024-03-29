import Button from './UI/Button';
import { TodoType } from '../types/types';

type SingleTodoProps = {
  item: TodoType;
  onDelete: () => void;
  onComplete: () => void;
};

const SingleTodo = ({ item, onDelete, onComplete }: SingleTodoProps) => {
  return (
    <li className='flex flex-col xs:flex-row gap-2 justify-between items-end xs:items-center border-b border-slate-400 py-2'>
      <label className='max-w-80 flex gap-2 items-center'>
        <input
          className='h-5 w-5 accent-slate-400 flex-shrink-0'
          type='checkbox'
          checked={item.completed}
          onChange={onComplete}
        />
        {item.todo}
      </label>
      <div>
        <Button onClick={onDelete} className='bg-red-400'>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default SingleTodo;
