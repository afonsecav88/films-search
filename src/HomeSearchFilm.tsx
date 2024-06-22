import { useState } from 'react';
import { CardFilmList } from './Components/CardFilmsList';
import { SearchFilm } from './Components/SearchFilm';
import { Container, Main } from './Components/StyledComponent';
import { NotFilmsSearch } from './Components/NotFilmsSearch';
import { Search } from './Models/Films.Interface';

function HomeSearchFilm() {
  const [termSerch, setTermSearch] = useState<string>('');
  const [films, setFilms] = useState<Search[]>([]);
  console.log(films.length == 0);

  console.log(films);
  return (
    <>
      <Container>
        <SearchFilm
          termSearch={termSerch}
          setTermSearch={setTermSearch}
          films={films}
          setFilms={setFilms}
        />
      </Container>
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
