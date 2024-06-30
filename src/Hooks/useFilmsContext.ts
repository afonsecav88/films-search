import { useContext } from 'react';
import { FilmsContext } from '../Context/FilmsContext';
import { ContextProps } from '../Models/ContextProps.Interface';

export const useFilmsContext = (): ContextProps => {
  const filmsContext = useContext(FilmsContext);
  return filmsContext;
};
