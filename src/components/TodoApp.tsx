import { useEffect, useState } from 'react';
import { ApiResponseType, TodoType } from '../types/types';
import AddTodoForm from './AddTodoForm';
import SingleTodo from './SingleTodo';
import axios from 'axios';
import { apiData } from '../helpers/helpers';
import Loading from './UI/Loading';
import TodoHeader from './TodoHeader';
import TodoFilters from './TodoFilters';
import Wrap from './UI/Wrap';

const url: string = import.meta.env.VITE_dummy_todos_url || 'https://dummyjson.com/todos';

const TodoApp = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<'doneUndone' | 'title' | ''>('');

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

  const handleAddTodo = async (newTodo: string) => {
    setError(null);
    setLoading(true);
    console.log('newTodo ===', newTodo);
    const [result, error] = await apiData<TodoType>(url + '/add', 'post', {
      todo: newTodo,
      completed: false,
      userId: 11,
    });
    if (error) {
      setError(error);
      setLoading(false);
      return;
    }
    setTodos((prev) => [result, ...prev]);
    setLoading(false);
  };

  const handleDeleteTodo = async (id: number) => {
    setError(null);
    setLoading(true);
    const [result, error] = await apiData<TodoType>(`${url}/${id}`, 'delete');
    if (error) {
      console.log('error ===', error);
      setError(error);
      setLoading(false);
      return;
    }
    setTodos((prev) => prev.filter((item) => item.id !== id));
    setLoading(false);
  };

  const handleToggleTodo = async (id: number) => {
    setError(null);
    setLoading(true);
    const [result, error] = await apiData<TodoType>(`${url}/${id}`, 'put', {
      completed: !todos.find((item) => item.id === id)?.completed,
    });
    if (error) {
      setError(error);
      setLoading(false);
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)),
    );
    setLoading(false);
  };

  let filteredTodos = todos;
  switch (statusFilter) {
    case 'all':
      filteredTodos = todos;
      break;
    case 'done':
      filteredTodos = todos.filter((item) => item.completed);
      break;
    case 'notDone':
      filteredTodos = todos.filter((item) => !item.completed);
      break;
    default:
      filteredTodos = todos;
  }

  let orderedTodos = filteredTodos;

  switch (sortBy) {
    case 'doneUndone':
      orderedTodos = filteredTodos.sort((a, b) => {
        if (order === 'asc') {
          return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
        } else {
          return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
        }
      });
      break;
    case 'title':
      orderedTodos = filteredTodos.sort((a, b) => {
        if (order === 'asc') {
          return a.todo.localeCompare(b.todo);
        } else {
          return b.todo.localeCompare(a.todo);
        }
      });
      break;
    default:
      orderedTodos = filteredTodos;
  }

  console.log('filteredTodos ===', filteredTodos);

  return (
    <Wrap>
      <TodoHeader todos={todos} />
      <div className='px-5 py-3'>
        {error && (
          <p className='text-red-500 bg-red-50 border border-red-300 py-3 rounded-md text-center '>
            {error?.message}
          </p>
        )}
        <h1 className='text-2xl font-semibold '>TodoApp</h1>
        <AddTodoForm onAddTodo={handleAddTodo} />

        <TodoFilters
          sortBy={sortBy}
          setSortBy={setSortBy}
          order={order}
          setOrder={setOrder}
          status={statusFilter}
          setStatus={setStatusFilter}
        />
        <div className='relative'>
          <Loading show={loading} />

          <ul className='mt-5'>
            {orderedTodos.map((tItem) => (
              <SingleTodo
                key={tItem.id}
                item={tItem}
                onComplete={() => handleToggleTodo(tItem.id)}
                onDelete={() => handleDeleteTodo(tItem.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </Wrap>
  );
};

export default TodoApp;
