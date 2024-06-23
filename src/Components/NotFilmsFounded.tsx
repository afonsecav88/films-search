interface NotFilmsFoundedProps {
  doingSearch: boolean;
  termSearch: string;
}

export const NotFilmsFounded = ({
  termSearch,
  doingSearch,
}: NotFilmsFoundedProps) => {
  if (doingSearch == true) return <></>;
  return (
    <div>{`No se encontraron peliculas con el término : ${termSearch}`}</div>
  );
};
