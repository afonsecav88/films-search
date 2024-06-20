import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';
import { Input, Button, Form } from './StyledComponent';

export const SearchFilm = () => {
  const [termSerch, setTermSearch] = useState<string>('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermSearch(e.target.value);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(`${e.key}`);
    }
  };

  const handleOnSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Search Films');
  };

  return (
    <Form method="post">
      <Input
        placeholder="Batman , Spiderman, ..."
        value={termSerch}
        name="searchTerm"
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
      />
      <Button type="submit" onSubmit={handleOnSubmit}>
        Buscar
      </Button>
    </Form>
  );
};
