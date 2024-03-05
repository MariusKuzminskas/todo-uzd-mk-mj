import { useState } from 'react';
import Button from './UI/Button';

type AddTodoFormProps = {
  onAddTodo: (newTodo: string) => void;
};

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {
  const [newTodoVal, setNewTodoVal] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateTodo(newTodoVal)) {
      return;
    }
    onAddTodo(newTodoVal);
    setNewTodoVal('');
  };

  const validateTodo = (todo: string) => {
    switch (true) {
      case !todo:
        setError('Please enter a todo');
        return false;
      case todo.length < 3:
        setError('Todo must be at least 3 characters long');
        return false;
      default:
        return true;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setNewTodoVal(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 mt-5'>
      <div className='w-full'>
        <input
          onChange={handleInputChange}
          value={newTodoVal}
          type='text'
          placeholder='Enter your todo'
          className='border border-slate-400 rounded-md px-3 py-1 w-full'
        />
        {/* paragraph to display error */}
        {error && (
          <p className='text-red-500 bg-red-50 border border-red-300 mt-2 px-3 py-2 rounded-md  '>
            {error}
          </p>
        )}
      </div>
      <Button className='self-start' type='submit'>
        Add
      </Button>
    </form>
  );
};

export default AddTodoForm;
