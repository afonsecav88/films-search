import { useState } from 'react';
import { CardFilmList } from './Components/CardFilmsList';
import { SearchFilm } from './Components/SearchFilm';
import { Main } from './Components/StyledComponent';
import { NotFilmsSearch } from './Components/NotFilmsSearch';
import { Search } from './Models/Films.Interface';
import { NotFilmsFounded } from './Components/NotFilmsFounded';
import { LoadingFilms } from './Components/LoadingFilms';

function HomeSearchFilm() {
  const [termSearch, setTermSearch] = useState<string>('');
  const [films, setFilms] = useState<Search[]>([]);
  const [doingSearch, setDoingSearch] = useState<boolean>(false);
  const [doSearch, setDoSearch] = useState<boolean>(false);

  console.log('doSearch', doSearch);
  console.log('doingSearch', doingSearch);
  console.log(films);

  const isSearchOrFoundedFilm = () => {
    if (doingSearch == false && films.length == 0 && termSearch.length == 0) {
      return <NotFilmsSearch />;
    }
    if (doingSearch == true) {
      return <LoadingFilms />;
    }
    if (films.length !== 0) {
      return <CardFilmList films={films} />;
    }
    if (doSearch && films.length == 0) {
      return (
        <NotFilmsFounded termSearch={termSearch} doingSearch={doingSearch} />
      );
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

      <Main>{isSearchOrFoundedFilm()}</Main>
    </>
  );
}

export default HomeSearchFilm;
