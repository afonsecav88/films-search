import { SearchFilmsContext } from './SearchFilmsContext';

interface FilmsContextProps {
  children: JSX.Element | JSX.Element[];
}

export const SearchFilmsProvider = ({ children }: FilmsContextProps) => {
  return (
    <SearchFilmsContext.Provider value={[]}>
      {children}
    </SearchFilmsContext.Provider>
  );
};
