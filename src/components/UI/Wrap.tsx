import React from 'react';

const Wrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='border overflow-hidden bg-white shadow-md border-slate-400 rounded-md  md:w-[500px] mx-auto min-h-96'>
      {children}
    </div>
  );
};

export default Wrap;
