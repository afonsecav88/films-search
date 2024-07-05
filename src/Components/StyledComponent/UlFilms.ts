import { styled } from 'styled-components'

export const UlFilms = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    max-width: 100%;
  }
  @media (max-width: 1200px) {
    max-width: 90%;
  }
`
