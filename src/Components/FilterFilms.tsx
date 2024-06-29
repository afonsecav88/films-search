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
  };
  const handleCheckYear = () => {
    setCheckYear(!checkYear);
  };

  console.log('me renderize');
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
