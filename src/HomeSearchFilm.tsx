import { useEffect } from 'react';
import { SearchFilm } from './Components/SearchFilm';
import { Main } from './Components/StyledComponent';
import { ErrorSearch } from './Components/ErrorSearch';
import { FilterFilms } from './Components/FilterFilms';
import { useCheckFilter } from './Hooks/useCheckFilter';
import 'react-loading-skeleton/dist/skeleton.css';

import { useFilmsContext } from './Hooks/useFilmsContext';
import { FilmsConditionalRender } from './Components/FilmsConditionalRender';

export const HomeSearchFilm = () => {
  const { films, setFilms, checkName, checkYear } = useFilmsContext();
  const { filteredFilms } = useCheckFilter(films, checkName, checkYear);

  useEffect(() => {
    if (checkName || checkYear) {
      setFilms(filteredFilms());
      return;
    }
  }, [checkName, checkYear]);

  return (
    <>
      <SearchFilm />
      <ErrorSearch />
      {films.length !== 0 && <FilterFilms />}
      <Main>
        <FilmsConditionalRender />
      </Main>
    </>
  );
};
