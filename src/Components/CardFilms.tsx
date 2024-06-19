import { Search } from '../Interfaces/Films.Interface';
import { Image, HeaderFilm, TextFilm, LiFilms } from './StyledComponent';

interface CardFilmProp {
  film: Search;
}

export const CardFilm = ({ film }: CardFilmProp) => {
  const { Title, Poster, Year, Type } = film;
  return (
    <LiFilms>
      <HeaderFilm>Título: {Title}</HeaderFilm>
      <TextFilm>Año: {Year}</TextFilm>
      <TextFilm>Tipo: {Type}</TextFilm>
      <Image src={Poster} alt={Title} />
    </LiFilms>
  );
};
