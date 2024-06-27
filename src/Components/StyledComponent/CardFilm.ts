import { styled } from 'styled-components';

export const CardFilm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  border-radius: 0.5rem;
  width: 14rem;
  padding-bottom: 1rem;
  @media (max-width: 600px) {
    max-width: 120%;
  }
`;
