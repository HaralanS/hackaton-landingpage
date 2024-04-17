/* eslint-disable max-lines */
import styled from 'styled-components';

export const Section = styled.section`
  background-color: #F3F4F6;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;

  h3 {
    color: #424242;
    font-size: larger;
    font-weight: 500;
    margin-bottom: 1rem;
    margin: 0 auto;
    text-align: center;
    width: 80%;
  }

  .submit {
    font-weight: 500;
    padding: 0.5rem 2rem;
  }

  .formDiv {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 3px 3px 3px 0px rgba(189, 189, 189, 0.75);
    margin-bottom: 3rem;
    padding: 2rem;
    width: fit-content;
  }
`;

export const Form = styled.form`
  margin-top: 3rem;
`;

export const InputDivs = styled.div`
  width: 90%;
  margin: 0 auto;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 320px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    width: 70%;
    flex-direction: row;
    justify-content: center;
  }
`;

export const InputMessage = styled.div`
  width: 90%;
  margin: 0 auto;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 320px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const Nome = styled.input`
  background-color: #EFEFEF;
  padding-left: 0.5rem;
  border-radius: 10px;
  border: none;

  @media (min-width: 320px) {
    height: 40px;
    width: 250px;
  }

  @media (min-width: 768px) {
    width: 320px;
    height: 50px;
    font-size: 19px;
  }
`;

export const Email = styled.input`
  background-color: #EFEFEF;

  padding-left: 0.5rem;
  border-radius: 10px;
  border: none;


  @media (min-width: 320px) {
    height: 40px;
    width: 250px;
  }

  @media (min-width: 768px) {
    width: 320px;
    height: 50px;
    font-size: 19px;
  }
`;

export const Celular = styled.input`
  background-color: #EFEFEF;

  padding-left: 0.5rem;
  border-radius: 10px;
  border: none;


  @media (min-width: 320px) {
    height: 40px;
    width: 250px;
  }

  @media (min-width: 768px) {
    width: 320px;
    height: 50px;
    font-size: 19px;
  }
`;

export const Assunto = styled.input`
  background-color: #EFEFEF;

  padding-left: 0.5rem;
  border-radius: 10px;
  border: none;


  @media (min-width: 320px) {
    height: 40px;
    width: 250px;
  }

  @media (min-width: 768px) {
    width: 320px;
    height: 50px;
    font-size: 19px;
  }
`;

export const Mensagem = styled.textarea`
  background-color: #EFEFEF;
  padding-left: 0.5rem;
  padding-top: 0.8rem;
  border-radius: 10px;
  border: none;


  @media (min-width: 320px) {
    height: 40px;
    width: 250px;
  }

  @media (min-width: 768px) {
    width: 650px;
    height: 150px;
    font-size: 19px;
  }
`;

