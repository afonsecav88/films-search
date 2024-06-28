import {
  DivFilter,
  FilterName,
  FilterSearch,
  FilterYear,
} from './StyledComponent';

export const FilterFilms = () => {
  return (
    <DivFilter>
      <FilterSearch>
        Ordenar por: <br />
        Nombre
        <FilterName type="checkbox" />
        Año
        <FilterYear type="checkbox" />
      </FilterSearch>
    </DivFilter>
  );
};
