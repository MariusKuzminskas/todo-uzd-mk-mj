import React from 'react';
import Button from './UI/Button';

const TodoApp = () => {
  return (
    <div className='border border-slate-400 rounded-md px-5 py-3 w-[500px] mx-auto min-h-96'>
      <h1 className='text-2xl font-semibold '>TodoApp</h1>
      <form className='flex gap-2 mt-5'>
        <input
          type='text'
          placeholder='Enter your todo'
          className='border border-slate-400 rounded-md px-3 py-1 w-full'
        />
        <button className='bg-slate-500 text-white px-3 py-1 rounded-md'>Add</button>
      </form>

      <div className='mt-5'>
        <ul>
          <li className='flex justify-between items-center border-b border-slate-400 py-2'>
            <p>Todo 1</p>
            <div>
              <Button>Edit</Button>
              <button className='bg-slate-500 text-white px-3 py-1 rounded-md'>Delete</button>
            </div>
          </li>
          <li className='flex justify-between items-center border-b border-slate-400 py-2'>
            <p>Todo 2</p>
            <div>
              <button className='bg-slate-500 text-white px-3 py-1 rounded-md'>Edit</button>
              <button className='bg-slate-500 text-white px-3 py-1 rounded-md'>Delete</button>
            </div>
          </li>
          <li className='flex justify-between items-center border-b border-slate-400 py-2'>
            <p>Todo 3</p>
            <div>
              <button className='bg-slate-500 text-white px-3 py-1 rounded-md'>Edit</button>
              <button className='bg-slate-500 text-white px-3 py-1 rounded-md'>Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
