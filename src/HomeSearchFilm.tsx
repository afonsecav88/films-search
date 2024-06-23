import { useState } from 'react';
import { CardFilmList } from './Components/CardFilmsList';
import { SearchFilm } from './Components/SearchFilm';
import { Main } from './Components/StyledComponent';
import { NotFilmsSearch } from './Components/NotFilmsSearch';
import { Search } from './Models/Films.Interface';
import { NotFilmsFounded } from './Components/NotFilmsFounded';

function HomeSearchFilm() {
  const [termSearch, setTermSearch] = useState<string>('');
  const [films, setFilms] = useState<Search[]>([]);

  const isSearchOrFoundedFilm = () => {
    return termSearch.length >= 3 && films.length == 0 ? (
      <NotFilmsFounded termSearch={termSearch} />
    ) : (
      <NotFilmsSearch />
    );
  };

  return (
    <>
      <SearchFilm
        termSearch={termSearch}
        setTermSearch={setTermSearch}
        films={films}
        setFilms={setFilms}
      />
      <Main>
        {films.length !== 0 ? (
          <CardFilmList films={films} />
        ) : (
          isSearchOrFoundedFilm()
        )}
      </Main>
    </>
  );
}

export default HomeSearchFilm;
