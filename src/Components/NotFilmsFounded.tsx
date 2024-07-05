import { useFilmsContext } from '../Hooks/useFilmsContext'

export const NotFilmsFounded = () => {
  const { termSearch } = useFilmsContext()

  return (
    <p>
      Realice otra búsqueda, no se encontraron películas con el término:
      {termSearch}
    </p>
  )
}
