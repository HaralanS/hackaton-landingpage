import styled from 'styled-components';

export const Section = styled.section`
  .nextPage {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    font-size: larger;
    margin-bottom: 3rem;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3rem;

    &:hover {
      cursor: pointer;
      color: #27a879;
    }
  }
  @media(min-width: 768px) {
    margin: 0 auto;
    width: 90%;

    .nextPage {
      width: 70%;
    }
  }

  @media(min-width: 1280px) {
    width: 70%;
  }
`;
