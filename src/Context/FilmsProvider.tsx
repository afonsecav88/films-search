import { useMemo, useState } from 'react';
import { Search } from '../Models/Films.Interface.ts';
import { FilmsContext } from './FilmsContext.ts';

interface FilmsProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const FilmsProvider = ({ children }: FilmsProviderProps) => {
  const [termSearch, setTermSearch] = useState<string>('');
  const [films, setFilms] = useState<Search[]>([]);
  const [doingSearch, setDoingSearch] = useState<boolean>(false);
  const [doSearch, setDoSearch] = useState<boolean>(false);
  const [checkName, setCheckName] = useState(false);
  const [checkYear, setCheckYear] = useState(false);
  const objFilms = useMemo(
    () => ({
      termSearch,
      setTermSearch,
      films,
      setFilms,
      doingSearch,
      setDoingSearch,
      doSearch,
      setDoSearch,
      checkName,
      setCheckName,
      checkYear,
      setCheckYear,
    }),
    [checkName, checkYear, doSearch, doingSearch, films, termSearch]
  );
  return (
    <FilmsContext.Provider value={objFilms}>{children}</FilmsContext.Provider>
  );
};
