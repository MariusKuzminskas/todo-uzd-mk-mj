type TodoFiltersProps = {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  status: string;
};

const TodoFilters = ({ status, setStatus }: TodoFiltersProps) => {
  console.log('status ===', status);

  return (
    <div className='mt-2'>
      <h3 className='text-sm font-medium '>Todo Filters</h3>
      {/* add checked uncheced todos checkboxes */}
      <div className='flex gap-2 items-center border border-slate-300 px-2'>
        <h4>Status:</h4>
        <label className='flex gap-1 items-center'>
          <input
            checked={status === 'all'}
            onChange={(e) => setStatus(e.target.value)}
            className='accent-slate-800'
            type='radio'
            name='status'
            value={'all'}
          />
          <span>All</span>
        </label>
        <label className='flex gap-1 items-center'>
          <input
            checked={status === 'done'}
            onChange={(e) => setStatus(e.target.value)}
            className='accent-green-600'
            type='radio'
            name='status'
            value={'done'}
          />
          <span>Done</span>
        </label>
        <label className='flex gap-1 items-center'>
          <input
            checked={status === 'notDone'}
            onChange={(e) => setStatus(e.target.value)}
            className='accent-red-600'
            type='radio'
            name='status'
            value={'notDone'}
          />
          <span>Incomplete</span>
        </label>
      </div>
    </div>
  );
};

export default TodoFilters;
