import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { CardFilmList } from './Components/CardFilmsList';
import { SearchFilm } from './Components/SearchFilm';
import { Main } from './Components/StyledComponent';
import { NotFilmsSearch } from './Components/NotFilmsSearch';
import { Search } from './Models/Films.Interface';
import { NotFilmsFounded } from './Components/NotFilmsFounded';
import { LoadingFilms } from './Components/LoadingFilms';
import { useSearchErrors } from './Hooks/useSearchErrors';
import { ErrorSearch } from './Components/ErrorSearch';
import { FilterFilms } from './Components/FilterFilms';
import { useCheckFilter } from './Hooks/useCheckFilter';

function HomeSearchFilm() {
  const [termSearch, setTermSearch] = useState<string>('');
  const [films, setFilms] = useState<Search[]>([]);
  const [doingSearch, setDoingSearch] = useState<boolean>(false);
  const [doSearch, setDoSearch] = useState<boolean>(false);
  const [checkName, setCheckName] = useState(false);
  const [checkYear, setCheckYear] = useState(false);
  const { error } = useSearchErrors(termSearch);
  const { filteredFilms } = useCheckFilter(films, checkName, checkYear);

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
      <SearchFilm
        termSearch={termSearch}
        setTermSearch={setTermSearch}
        films={films}
        setFilms={setFilms}
        setDoingSearch={setDoingSearch}
        setDoSearch={setDoSearch}
      />
      <ErrorSearch termSearch={termSearch} />
      {films.length !== 0 && (
        <FilterFilms
          checkName={checkName}
          checkYear={checkYear}
          setCheckName={setCheckName}
          setCheckYear={setCheckYear}
        />
      )}
      <Main>{isSearchOrFoundedFilms()}</Main>
    </>
  );
}

export default HomeSearchFilm;
