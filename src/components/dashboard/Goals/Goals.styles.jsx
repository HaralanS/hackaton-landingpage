import styled from 'styled-components';

export const Section = styled.section`
  @media(min-width: 320px) {
    margin: 0 auto;
    margin-top: 3rem;
    width: 90%;

    h2 {
      margin-bottom: 3rem;
      text-align: center;
    }

    .goalDiv {
      margin-bottom: 4rem;
    }

    .subTitle {
      font-size: larger;
      font-weight: 600;
    }

    .como-melhorar {
      background-color: #2FC18C;
      color: #fff;
      font-weight: 500;
      padding: 0.5rem 1rem;

      &:hover {
        background-color: #27a879;
      }
    }
  }

  @media(min-width: 768px) {
    width: 70%;
  }
`;
