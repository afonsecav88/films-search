import { useState } from 'react';
import {
  DivFilter,
  FilterName,
  FilterSearch,
  FilterYear,
} from './StyledComponent';
import { Search } from '../Models/Films.Interface';

export const FilterFilms = ({ films }: Search[]) => {
  const [checkName, setCheckName] = useState(false);
  const [checkYear, setCheckYear] = useState(false);
  console.log('checkName', checkName);
  console.log('checkYear', checkYear);

  const handleCheckName = () => {
    setCheckName(!checkName);
  };
  const handleCheckYear = () => {
    setCheckYear(!checkYear);
  };

  return (
    <DivFilter>
      <FilterSearch>
        Ordenar por: Nombre
        <FilterName
          type="checkbox"
          name="checkName"
          onChange={handleCheckName}
          checked={checkName}
        />
        Año
        <FilterYear
          type="checkbox"
          name="checkYear"
          onChange={handleCheckYear}
          checked={checkYear}
        />
      </FilterSearch>
    </DivFilter>
  );
};
