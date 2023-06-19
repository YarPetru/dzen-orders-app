export const getFormattedDate = (date: Date, option: 'isShort' | 'isGuarantee' | 'basic') => {
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const monthNumber = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const year = date.getFullYear();

  return option === 'isShort'
    ? `${monthNumber} / ${year}`
    : option === 'isGuarantee'
    ? `${day} / ${monthNumber} / ${year}`
    : `${day} / ${month} / ${year}`;
};
