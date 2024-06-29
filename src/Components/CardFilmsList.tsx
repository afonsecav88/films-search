import { Search } from '../Models/Films.Interface';
import { CardFilmsItem } from './CardFilmsItem';
import { UlFilms } from './StyledComponent';

interface CardFilmListProps {
  films: Search[];
}

export const CardFilmList = ({ films }: CardFilmListProps) => {
  return (
    <UlFilms>
      {films.map((film: Search) => (
        <CardFilmsItem key={film.imdbID} film={film} />
      ))}
    </UlFilms>
  );
};
