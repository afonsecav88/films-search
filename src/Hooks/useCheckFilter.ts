import { useEffect, useState } from 'react';
import { Search } from '../Models/Films.Interface';

export const useCheckFilter = (films: Search[]) => {
  const [checkName, setCheckName] = useState(false);
  const [checkYear, setCheckYear] = useState(false);

  const handleCheckName = () => {
    setCheckName(!checkName);
  };
  const handleCheckYear = () => {
    setCheckYear(!checkYear);
  };

  const checkFilter = () => {
    if (checkName) {
      const sort = [...films].sort((a, b) => a.Title.localeCompare(b.Title));
      console.log('sort', sort);
      return sort;
    } else if (checkYear) {
      const sort2 = [...films].sort((a, b) => a.Year.localeCompare(b.Year));
      console.log('sort2', sort2);
      return sort2;
    } else {
      return films;
    }
  };

  useEffect(() => {
    console.log('me ejecute');
    checkFilter();
  }, [handleCheckName, handleCheckYear]);

  return {
    handleCheckName,
    handleCheckYear,
    checkName,
    checkYear,
    checkFilter,
  };
};
