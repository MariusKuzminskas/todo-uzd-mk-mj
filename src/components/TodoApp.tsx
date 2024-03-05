import React from 'react';
import Button from './UI/Button';
import useApiData from '../hooks/useApiData';
import { ApiResponseType } from '../types/types';

const url = import.meta.env.VITE_dummy_todos_url as string;

console.log('url ===', url);
const TodoApp = () => {
  const { data, setData, error, loading } = useApiData<ApiResponseType>(url + '?limit=10');

  console.table(data?.todos);

  error && console.error(error);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='border border-slate-400 rounded-md px-5 py-3 w-[500px] mx-auto min-h-96'>
      {error && (
        <p className='text-red-500 bg-red-50 border border-red-300 py-3 rounded-md text-center '>
          {error?.message}
        </p>
      )}
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
          {data?.todos.map((tItem) => (
            <li
              key={tItem.id}
              className='flex gap-2 justify-between items-center border-b border-slate-400 py-2'>
              <label className='max-w-80 flex gap-2 items-center'>
                <input
                  className='h-5 w-5 accent-slate-400 flex-shrink-0'
                  type='checkbox'
                  defaultChecked={tItem.completed}
                />
                {tItem.todo}
              </label>
              <div>
                <Button>Edit</Button>
                <Button className='bg-red-400'>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
