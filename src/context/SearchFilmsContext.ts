import { createContext } from 'react';
import { Search } from '../Models/Films.Interface';

export const SearchFilmsContext = createContext<Search[]>([]);
