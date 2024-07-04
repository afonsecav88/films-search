import { Input, Button, Form } from './StyledComponent';
import { useSearch } from '../Hooks/useSearch';
import { useSearchErrors } from '../Hooks/useSearchErrors';
import { useFilmsContext } from '../Hooks/useFilmsContext';

export const SearchFilm = () => {
  const { termSearch } = useFilmsContext();
  const { handleOnSubmit, handleOnChange, handleKeyUp } = useSearch(termSearch);
  const { error } = useSearchErrors(termSearch);

  return (
    <Form onSubmit={handleOnSubmit} noValidate autoComplete="false">
      <Input
        placeholder="Batman , Spiderman ..."
        value={termSearch}
        name="searchTerm"
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
      />
      <Button disabled={error !== ''} type="submit">
        Buscar
      </Button>
    </Form>
  );
};
