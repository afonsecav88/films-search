import { useFilmsContext } from '../Hooks/useFilmsContext'
import { Search } from '../Models/Films.Interface'
import { CardFilmsItem } from './CardFilmsItem'
import { UlFilms } from './StyledComponent'

export const CardFilmList = () => {
  const { films } = useFilmsContext()
  return (
    <UlFilms>
      {films.map((film: Search) => (
        <CardFilmsItem key={film.imdbID} film={film} />
      ))}
    </UlFilms>
  )
}
