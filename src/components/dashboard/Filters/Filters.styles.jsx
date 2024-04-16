import styled from 'styled-components';

export const Section = styled.section`
  @media(min-width: 320px) {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 95%;

    h4 {
      font-weight: 600;
    }
    
    .setorAndFilter {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      
      div {
        display: flex;
        flex-direction: column;
      }

      .inputP {
        font-weight: 500;
      }
      
      select {
        background: #fff;
        border: 1px solid #989898;
        border-radius: 7px;
        height: 2.5rem;
        width: 9.1rem;

        &:hover {
          cursor: pointer;
        }
      }
    }

    label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 1.0rem 0 1.0rem;

      input {
        border: 1px solid #989898;
        border-radius: 7px;
        height: 2.5rem;
      }

      .inputP {
        font-weight: 500;
      }
    }


    button {
      align-self: center;
      background-color: #2FC18C;
      border: none;
      border-radius: 7px;
      color: #fff;
      font-size: large;
      font-weight: bold;
      margin-bottom: 2rem;
      padding: 0.3rem;
      width: 12rem;

      &:hover {
        cursor: pointer;
        background-color: #299b71;
      }
    }
  }

  @media(min-width: 768px) {
    .setorAndFilter {
      padding: 1rem;

      select {
        width: 12rem;
      }

    }
    label {
      align-self: center;
      width: 50%;
      input {
        height: 2.5rem;
      }
    }
  }

  @media(min-width: 1280px) {
    label { width: 30%; }
  }
`;
