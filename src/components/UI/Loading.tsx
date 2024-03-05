// create Loading component that gets a prop of loading and returns a div with the text Loading... if loading is true

type LoadingProps = {
  show: boolean;
};

const Loading = ({ show }: LoadingProps) => {
  if (show) {
    return (
      <div className='absolute inset-0 bg-slate-200/25 cursor-wait'>
        <div className='flex items-center justify-center '>
          <div className='bg-gray-200 p-5 rounded-lg mt-10'>
            <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900'></div>
            <div className='mt-4 text-gray-900'>Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
export default Loading;
