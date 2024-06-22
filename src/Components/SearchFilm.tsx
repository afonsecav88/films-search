import { Input, Button, Form } from './StyledComponent';
import { useSearch } from '../Hooks/useSearch';
import { Dispatch } from 'react';
import { Search } from '../Models/Films.Interface';

interface SearchFilmProps {
  termSearch: string;
  setTermSearch: Dispatch<React.SetStateAction<string>>;
  films: Search[];
  setFilms: Dispatch<React.SetStateAction<Search[]>>;
}

export const SearchFilm = ({
  termSearch,
  setTermSearch,
  setFilms,
}: SearchFilmProps) => {
  const { handleKeyUp, handleOnChange, handleOnSubmit } = useSearch(
    termSearch,
    setTermSearch,
    setFilms
  );

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        placeholder="Batman , Spiderman, ..."
        value={termSearch}
        name="searchTerm"
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
      />
      <Button type="submit">Buscar</Button>
    </Form>
  );
};
