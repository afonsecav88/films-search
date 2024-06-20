import { useEffect, useState } from 'react';
import { Search } from '../Interfaces/Films.Interface';
import { SearchService } from '../Services/SearchService';

export const useSearch = () => {
  const [searchTerm] = useState<string>('spiderman');
  const [films, setFilms] = useState<Search[]>([]);

  useEffect(() => {
    const listFilms = SearchService(searchTerm);
    listFilms.then((films) => setFilms(films));
  }, [searchTerm]);

  return {
    searchTerm,
    films,
  };
};
