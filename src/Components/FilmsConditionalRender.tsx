import { useFilmsContext } from '../Hooks/useFilmsContext';
import { CardFilmList } from './CardFilmsList';
import { LoadingFilms } from './LoadingFilms';
import { NotFilmsFounded } from './NotFilmsFounded';
import { NotFilmsSearch } from './NotFilmsSearch';

export const FilmsConditionalRender = (): JSX.Element => {
  const { films, doingSearch, doSearch } = useFilmsContext();
  if (doingSearch == true) return <LoadingFilms />;
  if (doSearch == false) return <NotFilmsSearch />;
  if (films.length !== 0) return <CardFilmList />;
  if (doSearch && films.length == 0) return <NotFilmsFounded />;
  return <NotFilmsSearch />;
};
