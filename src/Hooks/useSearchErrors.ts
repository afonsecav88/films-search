import { useState, useRef, useEffect } from 'react';

export const useSearchErrors = (termSearch: string): { error: string } => {
  const [error, setError] = useState<string>('');
  const isFirstSearch = useRef<boolean>(true);

  useEffect(() => {
    if (termSearch.length >= 1 && termSearch.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres');
      return;
    }
    if (isFirstSearch.current) {
      isFirstSearch.current = termSearch == '';
      return;
    }
    if (termSearch == '') {
      setError('Debes introducir el nombre de la pélicula !');
      return;
    }
    if (termSearch.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número');
      return;
    }
    setError('');
  }, [termSearch]);

  return {
    error,
  };
};
