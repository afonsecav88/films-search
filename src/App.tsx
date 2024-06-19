import { CardFilmList } from './Components/CardFilmsList';
import { SearchFilm } from './Components/SearchFilm';
import { Container } from './Components/StyledComponent';

function App() {
  return (
    <Container>
      <SearchFilm />
      <CardFilmList />
    </Container>
  );
}

export default App;
