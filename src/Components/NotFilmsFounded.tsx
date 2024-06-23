interface NotFilmsFoundedProps {
  doingSearch: boolean;
  termSearch: string;
}

export const NotFilmsFounded = ({ termSearch }: NotFilmsFoundedProps) => {
  return (
    <div>{`No se encontraron peliculas con el término : ${termSearch}`}</div>
  );
};
