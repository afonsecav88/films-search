import { Dispatch } from 'react';
import { Search } from './Films.Interface';

export interface ContextProps {
  termSearch: string;
  setTermSearch: Dispatch<React.SetStateAction<string>>;
  films: Search[];
  setFilms: Dispatch<React.SetStateAction<Search[]>>;
  doingSearch: boolean;
  setDoingSearch: Dispatch<React.SetStateAction<boolean>>;
  doSearch: boolean;
  setDoSearch: Dispatch<React.SetStateAction<boolean>>;
  checkName: boolean;
  setCheckName: Dispatch<React.SetStateAction<boolean>>;
  checkYear: boolean;
  setCheckYear: Dispatch<React.SetStateAction<boolean>>;
}
