import { useState } from 'react';
import { CardFilmList } from './Components/CardFilmsList';
import { SearchFilm } from './Components/SearchFilm';
import { Main } from './Components/StyledComponent';
import { NotFilmsSearch } from './Components/NotFilmsSearch';
import { Search } from './Models/Films.Interface';

function HomeSearchFilm() {
  const [termSearch, setTermSearch] = useState<string>('');
  const [films, setFilms] = useState<Search[]>([]);

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
          <NotFilmsSearch />
        )}
      </Main>
    </>
  );
}

export default HomeSearchFilm;
