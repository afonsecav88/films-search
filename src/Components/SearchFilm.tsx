import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';
import { Input, Button, Form } from './StyledComponent';

export const SearchFilm = () => {
  const [termSerch, setTermSearch] = useState<string>('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermSearch(e.target.value);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search Films');
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        placeholder="Batman , Spiderman, ..."
        value={termSerch}
        name="searchTerm"
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
      />
      <Button type="submit">Buscar</Button>
    </Form>
  );
};
