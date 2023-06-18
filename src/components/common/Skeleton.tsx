import React from 'react';
import classNames from 'classnames';

interface ISkeleton {
  times: number;
  flexCol?: boolean;
  isStatic?: boolean;
  className?: string;
}

const Skeleton: React.FC<ISkeleton> = ({ flexCol = false, isStatic = false, times, className }) => {
  const wrapperClasses = classNames('flex flex-wrap gap-6 justify-between', {
    'flex-col': flexCol,
  });
  const outerClasses = classNames(`relative overflow-hidden bg-grey-light rounded-md ${className}`);
  const innerClasses = classNames(
    `absolute inset-0 -translate-x-full bg-gradient-to-r from-grey-light via-white to-grey-light z-40`,
    { 'animate-shimmer ': !isStatic }
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div className={outerClasses} key={i}>
          <div className={innerClasses} />
        </div>
      );
    });

  return <div className={wrapperClasses}>{boxes}</div>;
};

export default Skeleton;
