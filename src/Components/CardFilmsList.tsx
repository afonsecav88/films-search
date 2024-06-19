import { useSearch } from '../Hooks/useSearch';
import { CardFilm } from './CardFilms';
import { UlFilms } from './StyledComponent';

export const CardFilmList = () => {
  const { films } = useSearch();
  return (
    <UlFilms>
      {films.map((film) => (
        <CardFilm key={film.imdbID} film={film} />
      ))}
    </UlFilms>
  );
};
