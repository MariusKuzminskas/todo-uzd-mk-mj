import React, { useEffect, useState } from 'react';

const TimeNow = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const ltFormatedTime = time.toLocaleTimeString('lt-LT', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const ltFormatedDate = time.toLocaleDateString('lt-LT', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <p>{ltFormatedTime}</p>
      <p className='text-base'>{ltFormatedDate}</p>
    </>
  );
};

export default TimeNow;
