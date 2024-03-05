import React from 'react';
import Button from './UI/Button';
import { TodoType } from '../types/types';

type SingleTodoProps = {
  item: TodoType;
  onDelete: () => void;
};

const SingleTodo = ({ item, onDelete }: SingleTodoProps) => {
  return (
    <li className='flex gap-2 justify-between items-center border-b border-slate-400 py-2'>
      <label className='max-w-80 flex gap-2 items-center'>
        <input
          className='h-5 w-5 accent-slate-400 flex-shrink-0'
          type='checkbox'
          defaultChecked={item.completed}
        />
        {item.todo}
      </label>
      <div>
        <Button>Edit</Button>
        <Button onClick={onDelete} className='bg-red-400'>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default SingleTodo;
