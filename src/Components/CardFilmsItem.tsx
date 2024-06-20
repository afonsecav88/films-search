import { Search } from '../Interfaces/Films.Interface';
import notImage from '../assets/no-image.svg';
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
  let imagefilm: string;
  const { Title, Poster, Year, Type } = film;
  Poster !== 'N/A' ? (imagefilm = Poster) : (imagefilm = notImage);
  return (
    <LiFilms>
      <CardFilm>
        <HeaderFilm>{Title}</HeaderFilm>
        <Image src={imagefilm} alt={Title} />
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
