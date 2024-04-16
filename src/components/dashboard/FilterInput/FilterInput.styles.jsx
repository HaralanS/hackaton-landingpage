import styled from 'styled-components';

export const Section = styled.section`
  @media(min-width: 320px) {
    background: #fff;
    border-radius: 0 0 10px 10px;
    box-shadow: 0px 1px 5px 1px rgba(156,156,156,1);
    margin: 0 auto;
    width: 90%;
    .header {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem;

      div {
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 1rem;
      }
      h1 {
        font-size: x-large;
      }
    }
  }

  @media(min-width: 1280px) {
    width: 100%;
    .header {
      flex-direction: row;
      justify-content: space-around;

      h1 {
        font-size: xx-large;
      }
    }
  }
`;
