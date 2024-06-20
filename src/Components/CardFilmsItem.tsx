import { Search } from '../Interfaces/Films.Interface';
import {
  Image,
  HeaderFilm,
  FooterCardItem,
  LiFilms,
  CardFilm,
  FooterCard,
  FooterCardItemTitle,
} from './StyledComponent';

interface CardFilmProp {
  film: Search;
}

export const CardFilmsItem = ({ film }: CardFilmProp) => {
  const { Title, Poster, Year, Type } = film;
  return (
    <LiFilms>
      <CardFilm>
        <HeaderFilm>{Title}</HeaderFilm>
        <Image src={Poster} alt={Title} />
        <FooterCard>
          <FooterCardItemTitle>Año: </FooterCardItemTitle>
          <FooterCardItem>{Year}</FooterCardItem>
          <FooterCardItemTitle>Tipo: </FooterCardItemTitle>
          <FooterCardItem>{Type}</FooterCardItem>
        </FooterCard>
      </CardFilm>
    </LiFilms>
  );
};
