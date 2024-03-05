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
        <span className='font-medium'>{completedTodos}</span>/{totalTodos}
      </div>
      <div className='absolute top-5 right-5 xs:right-auto xs:top-auto left-5 xs:left-10 xs:bottom-5 bg-slate-200/50 p-2 text-2xl shadow-md'>
        <TimeNow />
      </div>
    </header>
  );
};

export default TodoHeader;
