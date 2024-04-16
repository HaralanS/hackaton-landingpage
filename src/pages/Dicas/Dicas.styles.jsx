import styled from 'styled-components';

export const Section = styled.section`
  @media(min-width: 320px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 1rem;
    width: 90%;

    .backBtn {
      align-self: self-start;
      &:hover {
        cursor: pointer;
        fill: #2FC18C;
      }
    }

    h1 {
      font-size: 2.2rem;
      margin-top: 2rem;
      margin-bottom: 3rem;

    }

    .text {
      p {
        margin-bottom: 2rem;
      }

      img {
        border-radius: 7px;
        margin: 1rem 0;
        object-fit: cover;
        object-position: center;
        height: 25rem;
        width: 100%;
      }
  
      li {
        margin-bottom: 2rem;
      }
    }

  }

  @media(min-width: 1280px) {
    width: 70%;
    margin-top: 3rem;
  }

`;
