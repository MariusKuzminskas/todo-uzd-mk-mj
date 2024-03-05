import useApiData from '../hooks/useApiData';
import { ApiResponseType } from '../types/types';
import AddTodoForm from './AddTodoForm';
import SingleTodo from './SingleTodo';

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
      <AddTodoForm onAddTodo={() => {}} />

      <div className='mt-5'>
        <ul>
          {data?.todos.map((tItem) => (
            <SingleTodo key={tItem.id} item={tItem} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
