import { useState } from 'react';
import { Search } from '../Interfaces/Films.Interface';

export const useSearch = () => {
  const [term, searchTerm] = useState<string>('');
  const [films, setFilms] = useState<Search[]>([]);
};
