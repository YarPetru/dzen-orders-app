import React, { useEffect, useState } from 'react';
import { HiOutlineClock } from 'react-icons/hi';

const CurrentTime: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const optionsDate: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      };

      const optionsTime: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };

      const formattedDate = now.toLocaleString('en-US', optionsDate);
      setCurrentDate(formattedDate);
      const formattedTime = now.toLocaleString('en-US', optionsTime);
      setCurrentTime(formattedTime);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex-col-start gap-2">
      <h2>Today</h2>
      <div className="flex-row-aligned gap-4">
        <p>{currentDate}</p>
        <div className="flex-row-aligned   gap-1">
          <HiOutlineClock size="24px" className="text-accent-light" />
          <p>{currentTime}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentTime;
