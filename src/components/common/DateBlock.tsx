import React from 'react';
import { getFormattedDate } from 'helpers';

interface IDateBlock {
  date: Date;
}

const DateBlock: React.FC<IDateBlock> = ({ date }) => {
  const formattedDateLong = getFormattedDate(date, 'basic');
  const formattedDateShort = getFormattedDate(date, 'isShort');

  return (
    <div className="flex flex-col gap-2">
      <p className="subparagraph">{formattedDateShort}</p>
      <p>{formattedDateLong}</p>
    </div>
  );
};

export default DateBlock;
