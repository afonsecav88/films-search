import { FormEvent, KeyboardEvent, Dispatch, ChangeEvent } from 'react';
import { Search } from '../Models/Films.Interface';
import { SearchService } from '../Services/SearchService';
import debounce from 'just-debounce-it';
import { useSearchErrors } from './useSearchErrors';

export const useSearch = (
  termSearch: string,
  setTermSearch: Dispatch<React.SetStateAction<string>>,
  setFilms: Dispatch<React.SetStateAction<Search[]>>,
  setDoingSearch: Dispatch<React.SetStateAction<boolean>>,
  setDoSearch: Dispatch<React.SetStateAction<boolean>>
) => {
  const { error } = useSearchErrors(termSearch);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermSearch(e.target.value);
  };

  const findFilmByTerm = () => {
    if (error.length > 0) return;
    const listFilms = SearchService(termSearch);
    listFilms
      .then((films) => setFilms(films))
      .finally(() => {
        setDoingSearch(false);
        setDoSearch(true);
      });
  };

  const debounceFindFilmByTerm = debounce(() => {
    findFilmByTerm();
  }, 3000);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    if (error.length != 0) return;
    setDoingSearch(true);
    debounceFindFilmByTerm();
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error.length != 0) return;
    setDoingSearch(true);
    debounceFindFilmByTerm();
  };
  return {
    handleKeyUp,
    handleOnSubmit,
    handleOnChange,
  };
};
