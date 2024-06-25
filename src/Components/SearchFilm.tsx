import { Input, Button, Form } from './StyledComponent';
import { useSearch } from '../Hooks/useSearch';
import { Dispatch } from 'react';
import { Search } from '../Models/Films.Interface';
import { useSearchErrors } from '../Hooks/useSearchErrors';

interface SearchFilmProps {
  termSearch: string;
  setTermSearch: Dispatch<React.SetStateAction<string>>;
  films: Search[];
  setFilms: Dispatch<React.SetStateAction<Search[]>>;
  setDoingSearch: Dispatch<React.SetStateAction<boolean>>;
  setDoSearch: Dispatch<React.SetStateAction<boolean>>;
}

export const SearchFilm = ({
  termSearch,
  setTermSearch,
  setFilms,
  setDoingSearch,
  setDoSearch,
}: SearchFilmProps) => {
  const { handleOnSubmit, handleOnChange, handleKeyUp } = useSearch(
    termSearch,
    setTermSearch,
    setFilms,
    setDoingSearch,
    setDoSearch
  );
  const { error } = useSearchErrors(termSearch);

  console.log('error', error.length == 0);
  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Input
          placeholder="Batman , Spiderman ..."
          value={termSearch}
          name="searchTerm"
          onChange={handleOnChange}
          onKeyUp={handleKeyUp}
        />
        <Button disabled={error.length > 0} type="submit">
          Buscar
        </Button>
      </Form>
    </>
  );
};
