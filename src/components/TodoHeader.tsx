//
import bgImage from '../assets/bg.jpg';
import TimeNow from './UI/TimeNow';

const TodoHeader = ({ todos }) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter((item) => item.completed).length;
  return (
    <header className='relative'>
      <img className='h-52 w-full object-cover object-bottom' src={bgImage} alt='Todo header' />
      <div className='absolute right-10 bottom-5 bg-slate-200/25 text-2xl'>
        {completedTodos}/{totalTodos}
      </div>
      <div className='absolute left-10 bottom-5 bg-slate-200/25 text-2xl'>
        <TimeNow />
      </div>
    </header>
  );
};

export default TodoHeader;
