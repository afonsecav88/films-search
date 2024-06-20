import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Input, Button } from './StyledComponent';

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

  const handleOnSubmit = () => {
    console.log('Search Films');
  };

  return (
    <>
      <Input
        placeholder="Batman , Spiderman, ..."
        value={termSerch}
        name={termSerch}
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
      />
      <Button onSubmit={()=>handleOnSubmit()}>Buscar</Button>
    </>
  );
};
