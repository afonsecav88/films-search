import {
  DivFilter,
  FilterName,
  FilterSearch,
  FilterYear,
} from './StyledComponent';

interface FilterFilmsProps {
  checkName: boolean;
  checkYear: boolean;
  setCheckName: React.Dispatch<boolean>;
  setCheckYear: React.Dispatch<boolean>;
}

export const FilterFilms = ({
  checkName,
  checkYear,
  setCheckName,
  setCheckYear,
}: FilterFilmsProps) => {
  const handleCheckName = () => {
    setCheckName(!checkName);
    setCheckYear(false);
  };
  const handleCheckYear = () => {
    setCheckYear(!checkYear);
    setCheckName(false);
  };
  return (
    <DivFilter>
      <FilterSearch>
        Ordenar por:{' '}
        <p style={{ color: checkName ? '#1d3595' : 'black' }}>Nombre </p>
        <FilterName
          type="checkbox"
          name="checkName"
          onChange={handleCheckName}
          checked={checkName}
        />
        <p style={{ color: checkYear ? '#1d3595' : 'black' }}>Año </p>
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
