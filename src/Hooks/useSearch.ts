import React from 'react';
import { FormEvent, KeyboardEvent, Dispatch, ChangeEvent } from 'react';
import { Search } from '../Models/Films.Interface';
import { SearchService } from '../Services/SearchService';
import debounce from 'just-debounce-it';

export const useSearch = (
  termSearch: string,
  setTermSearch: Dispatch<React.SetStateAction<string>>,
  setFilms: Dispatch<React.SetStateAction<Search[]>>,
  setDoingSearch: Dispatch<React.SetStateAction<boolean>>
) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermSearch(e.target.value);
  };

  const findFilmByTerm = () => {
    if (termSearch.length <= 2) return;
    const listFilms = SearchService(termSearch);
    listFilms
      .then((films) => setFilms(films))
      .finally(() => setDoingSearch(false));
  };

  const debounceFindFilmByTerm = debounce(() => {
    findFilmByTerm();
  }, 3000);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    setDoingSearch(true);
    debounceFindFilmByTerm();
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDoingSearch(true);
    debounceFindFilmByTerm();
  };
  return {
    handleKeyUp,
    handleOnSubmit,
    handleOnChange,
  };
};
