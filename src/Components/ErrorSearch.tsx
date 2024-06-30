import { useSearchErrors } from '../Hooks/useSearchErrors';
import { ErrorContainer } from './StyledComponent';
import { useFilmsContext } from '../Hooks/useFilmsContext';

export const ErrorSearch = () => {
  const { termSearch } = useFilmsContext();
  const { error } = useSearchErrors(termSearch);
  return <ErrorContainer>{error}</ErrorContainer>;
};
