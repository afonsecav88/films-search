import { Search } from '../Models/Films.Interface';

export const useCheckFilter = (
  films: Search[],
  checkName: boolean,
  checkYear: boolean
): { filteredFilms: () => Search[] } => {
  const filteredFilms = () => {
    if (checkName) {
      return [...films].sort((a, b) => a.Title.localeCompare(b.Title));
    }
    if (checkYear) {
      return [...films].sort((a, b) => a.Year.localeCompare(b.Year));
    }
    return [...films];
  };
  return {
    filteredFilms,
  };
};
