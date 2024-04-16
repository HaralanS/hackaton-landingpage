import styled from 'styled-components';

export const Section = styled.section`
  @media(min-width: 320px) {
    .ClearDiv {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    .inactiveClear {
      display: none;
    }

    .activeClear {
      display: inline;
      margin-top: 2rem;
      width: fit-content;
    }
    
    button {
      font-weight: 500;
    }
  }
`;

export const SectionTable = styled.section`
  @media(min-width: 320px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 2rem;
    width: 95%;

    table {
      border-collapse: collapse;
      margin: 0 auto;
      margin-top: 3rem;
      margin-bottom: 3rem;
    }

    tr {
      border: 1px solid #ddd;
    }
    
    td {
      padding: 0.5rem;
      text-align: center;
    }
    
    tr:nth-child(even) {
      background-color: #f2f2f2;

      &:hover { background-color: #42d7a1; color: #fff; }
    }
    
    tr:nth-child(odd) {
      background-color: #ffffff;
      &:hover { background-color: #42d7a1; color: #fff; }
    }
  }

  @media(min-width: 1280px) { table { width: 100%; } }
`;

export const H3 = styled.h4`
  color: #F44336;
  text-align: center;
  font-size: large;
  font-weight: 600;
  padding-top: 3rem;
`;
