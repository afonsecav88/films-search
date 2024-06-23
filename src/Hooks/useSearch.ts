import React from 'react';
import { FormEvent, KeyboardEvent, Dispatch, ChangeEvent } from 'react';
import { Search } from '../Models/Films.Interface';
import { SearchService } from '../Services/SearchService';
import debounce from 'just-debounce-it';

export const useSearch = (
  termSearch: string,
  setTermSearch: Dispatch<React.SetStateAction<string>>,
  setFilms: Dispatch<React.SetStateAction<Search[]>>
) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermSearch(e.target.value);
  };

  const findFilmByTerm = () => {
    if (termSearch.length <= 2) return;
    const listFilms = SearchService(termSearch);
    listFilms.then((films) => setFilms(films));
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    findFilmByTerm();
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    findFilmByTerm();
  };
  return {
    handleKeyUp,
    handleOnSubmit,
    handleOnChange,
  };
};
