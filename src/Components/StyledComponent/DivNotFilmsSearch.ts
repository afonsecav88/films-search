import styled from 'styled-components';

export const DivNotFilmsSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 600px) {
    max-width: 100%;
  }
  @media (max-width: 1200px) {
    max-width: 90%;
  }
`;
