import { useState } from 'react';
import { CardFilmList } from './Components/CardFilmsList';
import { SearchFilm } from './Components/SearchFilm';
import { Main } from './Components/StyledComponent';
import { NotFilmsSearch } from './Components/NotFilmsSearch';
import { Search } from './Models/Films.Interface';
import { NotFilmsFounded } from './Components/NotFilmsFounded';
import { LoadingFilms } from './Components/LoadingFilms';
import { useSearchErrors } from './Hooks/useSearchErrors';
import { ErrorSearch } from './Components/ErrorSearch';
import 'react-loading-skeleton/dist/skeleton.css';

function HomeSearchFilm() {
  const [termSearch, setTermSearch] = useState<string>('');
  const [films, setFilms] = useState<Search[]>([]);
  const [doingSearch, setDoingSearch] = useState<boolean>(false);
  const [doSearch, setDoSearch] = useState<boolean>(false);
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
  };

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
      <Main>{isSearchOrFoundedFilms()}</Main>
    </>
  );
}

export default HomeSearchFilm;
