import { useState, useRef, useEffect } from 'react';

export const useSearchErrors = (termSearch: string) => {
  const [error, setError] = useState('');
  const isFirstSearch = useRef(true);

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = termSearch == '';
      return;
    }
    if (termSearch == '') {
      setError('No se puede buscar una película vacía');
      return;
    }

    if (termSearch.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número');
      return;
    }

    if (termSearch.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres');
      return;
    }
    setError('');
  }, [termSearch]);

  return {
    error,
  };
};
