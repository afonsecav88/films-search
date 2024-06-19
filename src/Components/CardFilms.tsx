import { Search } from '../Interfaces/Films.Interface';
import { LiFilms } from './StyledComponent/LiFilms';

interface CardFilmProp {
  film: Search;
}

export const CardFilm = ({ film }: CardFilmProp) => {
  return <LiFilms>{film.Title}</LiFilms>;
};
