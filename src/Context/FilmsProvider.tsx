import { useState } from 'react';
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
  return (
    <FilmsContext.Provider
      value={{
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
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
};
