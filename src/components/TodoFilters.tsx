type TodoFiltersProps = {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  sortBy: 'doneUndone' | 'title' | '';
  setSortBy: React.Dispatch<React.SetStateAction<'doneUndone' | 'title' | ''>>;
  order: 'asc' | 'desc';
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
};

const TodoFilters = ({
  status,
  setStatus,
  sortBy,
  order,
  setOrder,
  setSortBy,
}: TodoFiltersProps) => {
  console.log('status ===', status);

  return (
    <div className='mt-2 border rounded-lg border-slate-400 p-3'>
      <h3 className='text-sm font-medium '>Todo Filters</h3>
      {/* add checked uncheced todos checkboxes */}
      <div className='flex gap-2 items-center border-b  px-2 mb-2'>
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
      <div className='flex gap-2 items-center border-b  px-2'>
        <label>
          <span>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'doneUndone' | 'title' | '')}
            className='border border-slate-400 rounded-sm'>
            <option disabled value=''>
              select
            </option>
            <option value='doneUndone'>Status</option>
            <option value='title'>Title</option>
          </select>
        </label>
        <label>
          <span>Order:</span>
          <select
            disabled={!sortBy}
            value={order}
            onChange={(e) => setOrder(e.target.value as 'asc' | 'desc')}
            className='border border-slate-400 rounded-sm'>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default TodoFilters;
