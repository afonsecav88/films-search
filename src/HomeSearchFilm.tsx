import { useContext, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { CardFilmList } from './Components/CardFilmsList';
import { SearchFilm } from './Components/SearchFilm';
import { Main } from './Components/StyledComponent';
import { NotFilmsSearch } from './Components/NotFilmsSearch';
import { NotFilmsFounded } from './Components/NotFilmsFounded';
import { LoadingFilms } from './Components/LoadingFilms';
import { useSearchErrors } from './Hooks/useSearchErrors';
import { ErrorSearch } from './Components/ErrorSearch';
import { FilterFilms } from './Components/FilterFilms';
import { useCheckFilter } from './Hooks/useCheckFilter';
import { FilmsContext } from './Context/FilmsContext';

export const HomeSearchFilm = () => {
  const {
    termSearch,
    films,
    setFilms,
    doingSearch,
    doSearch,
    checkName,
    checkYear,
  } = useContext(FilmsContext);

  const { filteredFilms } = useCheckFilter(films, checkName, checkYear);
  const { error } = useSearchErrors(termSearch);

  const isSearchOrFoundedFilms = () => {
    if (doSearch == false && doingSearch == false) {
      return <NotFilmsSearch />;
    }
    if (error.length !== 0) return;
    if (doingSearch == true && termSearch.length >= 3) {
      return <LoadingFilms />;
    }
    if (films.length !== 0) {
      return <CardFilmList films={films} />;
    }
    if (doSearch && films.length == 0) {
      return <NotFilmsFounded termSearch={termSearch} />;
    }
    return <NotFilmsSearch />;
  };

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
      <Main>{isSearchOrFoundedFilms()}</Main>
    </>
  );
};
