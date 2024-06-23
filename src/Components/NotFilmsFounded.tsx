export const NotFilmsFounded = ({ termSearch }: { termSearch: string }) => {
  return (
    <div>{`No se encontraron peliculas con el término : ${termSearch}`}</div>
  );
};
