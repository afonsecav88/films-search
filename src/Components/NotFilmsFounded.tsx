import { useFilmsContext } from '../Hooks/useFilmsContext';

export const NotFilmsFounded = () => {
  const { termSearch } = useFilmsContext();

  return <>{`No se encontraron peliculas con el término : ${termSearch} `}</>;
};
