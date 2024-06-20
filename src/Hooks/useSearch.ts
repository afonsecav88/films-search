import { useEffect, useState } from 'react';
import { Search } from '../Interfaces/Films.Interface';
import { SearchService } from '../Services/SearchService';

export const useSearch = () => {
  const term = 'spiderman';
  // const [searchTerm] = useState<string>(term);
  const [films, setFilms] = useState<Search[]>([]);

  useEffect(() => {
    const listFilms = SearchService(term);
    listFilms.then((films) => setFilms(films));
  }, [term]);

  return {
    films,
  };
};
