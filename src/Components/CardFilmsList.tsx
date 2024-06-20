import { useSearch } from '../Hooks/useSearch';
import { CardFilmsItem } from './CardFilmsItem';
import { UlFilms } from './StyledComponent';

export const CardFilmList = () => {
  const { films } = useSearch();
  return (
    <UlFilms>
      {films.map((film) => (
        <CardFilmsItem key={film.imdbID} film={film} />
      ))}
    </UlFilms>
  );
};
