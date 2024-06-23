import { Search } from '../Models/Films.Interface';
import { CardFilmsItem } from './CardFilmsItem';
import { LoadingFilms } from './LoadingFilms';
import { UlFilms } from './StyledComponent';

interface CardFilmListProps {
  films: Search[];
}

export const CardFilmList = ({ films }: CardFilmListProps) => {
  return (
    <>
      {films.length == 0 ? (
        <LoadingFilms />
      ) : (
        <UlFilms>
          {films.map((film: Search) => (
            <CardFilmsItem key={film.imdbID} film={film} />
          ))}
        </UlFilms>
      )}
    </>
  );
};
