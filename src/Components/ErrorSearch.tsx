import { useSearchErrors } from '../Hooks/useSearchErrors';
import { ErrorContainer } from './StyledComponent';

export const ErrorSearch = ({ termSearch }: { termSearch: string }) => {
  const { error } = useSearchErrors(termSearch);
  return <ErrorContainer>{error}</ErrorContainer>;
};
