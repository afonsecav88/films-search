import styled from 'styled-components';

export const ContainerSkeleton = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    max-width: 100%;
  }
  @media (max-width: 1200px) {
    max-width: 90%;
  }
`;
