import { Input, Button, Form, ErrorContainer } from './StyledComponent';
import { useSearch } from '../Hooks/useSearch';
import { Dispatch } from 'react';
import { Search } from '../Models/Films.Interface';
import { useSearchErrors } from '../Hooks/useSearchErrors';

interface SearchFilmProps {
  termSearch: string;
  setTermSearch: Dispatch<React.SetStateAction<string>>;
  films: Search[];
  setFilms: Dispatch<React.SetStateAction<Search[]>>;
  doingSearch: boolean;
  setDoingSearch: Dispatch<React.SetStateAction<boolean>>;
}

export const SearchFilm = ({
  termSearch,
  setTermSearch,
  setFilms,
  setDoingSearch,
}: SearchFilmProps) => {
  const { error } = useSearchErrors(termSearch);
  const { handleOnSubmit, handleOnChange, handleKeyUp } = useSearch(
    termSearch,
    setTermSearch,
    setFilms,
    setDoingSearch
  );

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
        <Button type="submit">Buscar</Button>
      </Form>
      <ErrorContainer>{error}</ErrorContainer>
    </>
  );
};
