import {
  DivFilter,
  FilterName,
  FilterSearch,
  FilterYear,
} from './StyledComponent';
import { Search } from '../Models/Films.Interface';
import { useCheckFilter } from '../Hooks/useCheckFilter';

interface FilterFilmsProps {
  films: Search[];
}

export const FilterFilms = ({ films }: FilterFilmsProps) => {
  const { handleCheckName, handleCheckYear, checkName, checkYear } =
    useCheckFilter(films);
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
