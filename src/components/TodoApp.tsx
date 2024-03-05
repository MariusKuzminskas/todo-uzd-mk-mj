import { useEffect, useState } from 'react';

import { ApiResponseType, TodoType } from '../types/types';
import AddTodoForm from './AddTodoForm';
import SingleTodo from './SingleTodo';
import axios from 'axios';

const url = import.meta.env.VITE_dummy_todos_url as string;

console.log('url ===', url);
const TodoApp = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTodos = async (from: string) => {
      try {
        setLoading(true);
        const response = await axios.get<ApiResponseType>(from);
        setTodos(response.data.todos);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchTodos(url + '?limit=10');
  }, []);

  // console.table(todos);

  const handleAddTodo = (newTodo: string) => {
    setError(null);
    console.log('newTodo ===', newTodo);
    axios
      .post(url + '/add', { todo: newTodo, completed: false, userId: 11 })
      .then((response) => {
        console.log('response ===', response.data);
        setTodos((prev) => [response.data, ...prev]);
      })
      .catch((error) => {
        console.log('error handleAddTodo ===', error);
        console.log('error.response ===', error.response.data.message);
        setError(new Error(error.response.data.message));
      });
  };

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
      <AddTodoForm onAddTodo={handleAddTodo} />

      <div className='mt-5'>
        <ul>
          {todos.map((tItem) => (
            <SingleTodo key={tItem.id} item={tItem} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
