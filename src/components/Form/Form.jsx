/* eslint-disable no-alert */
/* eslint-disable max-len */
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from 'rsuite';
import {
  Section,
  Form,
  Nome,
  Email,
  Celular,
  Assunto,
  Mensagem,
  InputDivs,
  InputMessage,
} from './Form.styles';

function Forms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      user_email: email,
      phone,
      subject,
      message,
    };

    try {
      emailjs.send('service_04sz68a', 'template_8qo9s2m', templateParams, 'ldHMyj2jBaDgVPCgd');
      window.alert('Email enviado!');
      setName('');
      setEmail('');
      setMessage('');
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Section>
      <div className="formDiv">
        <h3>A Corp Solutions faz sentido pra você? Entre em contato e venha fazer parte do nosso time!</h3>
        <Form className="form" onSubmit={sendEmail}>
          <InputDivs>
            <label>
              <Nome
                onChange={(e) => setName(e.target.value)}
                name="from_name"
                placeholder="Nome"
                type="text"
                id="nome"
                required
              />
            </label>
            <label>
              <Email
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                placeholder="Email"
                type="email"
                id="email"
                required
              />
            </label>
          </InputDivs>
          <InputDivs>
            <label>
              <Celular
                onChange={(e) => setPhone(e.target.value)}
                name="Telefone"
                placeholder="Celular"
                type="text"
                id="celular"
                required
              />
            </label>
            <label>
              <Assunto
                onChange={(e) => setSubject(e.target.value)}
                name="Assunto"
                placeholder="Assunto"
                type="text"
                id="assunto"
                required
              />
            </label>
          </InputDivs>
          <InputMessage>
            <label>
              <Mensagem
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                placeholder="Mensagem"
                id="mensagem"
                required
              />
            </label>
            <Button className="submit" type="submit" color="green" appearance="primary">Enviar</Button>
          </InputMessage>
        </Form>
      </div>
    </Section>
  );
}

export default Forms;
