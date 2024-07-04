import { FormEvent, KeyboardEvent, ChangeEvent } from 'react';
import { SearchService } from '../Services/SearchService';
import debounce from 'just-debounce-it';
import { useSearchErrors } from './useSearchErrors';
import { useFilmsContext } from './useFilmsContext';

export const useSearch = (termSearch: string) => {
  const { setTermSearch, setFilms, setDoingSearch, setDoSearch } =
    useFilmsContext();
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
  }, 1000);

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
