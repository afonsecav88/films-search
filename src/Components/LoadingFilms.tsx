import { LoadingFilmsItem } from './LoadingFilmsItem';
import { ContainerSkeleton } from './StyledComponent';

export const LoadingFilms = () => {
  return (
    <ContainerSkeleton>
      <LoadingFilmsItem />
      <LoadingFilmsItem />
      <LoadingFilmsItem />
      <LoadingFilmsItem />
      <LoadingFilmsItem />
      <LoadingFilmsItem />
      <LoadingFilmsItem />
      <LoadingFilmsItem />
      <LoadingFilmsItem />
      <LoadingFilmsItem />
    </ContainerSkeleton>
  );
};
