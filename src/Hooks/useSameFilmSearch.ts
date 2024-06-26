import { useEffect, useRef } from 'react';

export const useSameFilmSearch = (termSearch: string) => {
  const prevSearchValue = useRef('');
  useEffect(() => {
    prevSearchValue.current = termSearch;
  }, [termSearch, prevSearchValue]);

  return prevSearchValue.current;
};
