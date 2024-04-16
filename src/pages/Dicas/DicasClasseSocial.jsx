/* eslint-disable max-len */
import { IoArrowBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import classe from '../../assets/dashboard/classe-social.jpeg';
import * as S from './Dicas.styles';

function DicasClasseSocial() {
  const navigate = useNavigate();
  return (
    <S.Section>
      <IoArrowBackCircle onClick={ () => navigate('/') } className="backBtn" size={ 30 } />
      <h1>O Papel Transformador das Empresas na Vida de Pessoas de Baixa Renda</h1>
      <div className="text">
        <p>
          Em um cenário onde a desigualdade socioeconômica é uma realidade presente em muitas partes do mundo, as empresas têm um papel fundamental a desempenhar na criação de oportunidades e na melhoria da qualidade de vida das pessoas de baixa renda. Ao adotar práticas empresariais responsáveis e inclusivas, as empresas não apenas contribuem para o desenvolvimento econômico sustentável, mas também têm o potencial de impactar positivamente comunidades inteiras e transformar vidas.
        </p>
        <img src={ classe } alt="um homem subindo degraus representando sua ascensão na carreira." />
        <ul>
          <li>
            Criação de Empregos e Oportunidades de Crescimento: Uma das formas mais diretas e eficazes pelas quais as empresas podem agregar valor às comunidades de baixa renda é através da criação de empregos dignos e oportunidades de crescimento profissional. Ao oferecer empregos estáveis e bem remunerados, as empresas não apenas ajudam a reduzir a taxa de desemprego, mas também capacitam indivíduos e famílias a melhorar suas condições de vida e garantir um futuro mais próspero.
          </li>
          <li>
            Acesso à Capacitação e Desenvolvimento Profissional: Além de oferecer empregos, as empresas podem investir em programas de capacitação e desenvolvimento profissional voltados para pessoas de baixa renda. Isso pode incluir cursos de capacitação, treinamentos técnicos e oportunidades de aprendizado contínuo, preparando os participantes para ingressar no mercado de trabalho ou avançar em suas carreiras existentes.
          </li>
          <li>
            Fomento ao Empreendedorismo e Inovação: As empresas podem desempenhar um papel ativo no fomento ao empreendedorismo e à inovação nas comunidades de baixa renda. Isso pode ser feito por meio de programas de mentoria, incubadoras de negócios e iniciativas de apoio ao empreendedorismo social, capacitando indivíduos a iniciar seus próprios negócios e criar soluções inovadoras para os desafios locais.
          </li>
          <li>
            Acesso a Produtos e Serviços Essenciais: Ao fornecer produtos e serviços essenciais a preços acessíveis, as empresas podem atender às necessidades básicas das pessoas de baixa renda, garantindo acesso a alimentos, moradia, saúde, educação e outros serviços fundamentais. Isso não apenas melhora a qualidade de vida das comunidades, mas também contribui para o desenvolvimento econômico sustentável.
          </li>
          <li>
            Responsabilidade Social Corporativa e Engajamento Comunitário: As empresas podem demonstrar seu compromisso com a responsabilidade social corporativa e o engajamento comunitário por meio de iniciativas que visam diretamente melhorar as condições de vida das pessoas de baixa renda. Isso pode incluir programas de voluntariado corporativo, parcerias com organizações sem fins lucrativos e investimentos em projetos sociais e de infraestrutura nas comunidades onde operam.
          </li>
        </ul>
      </div>
    </S.Section>
  );
}

export default DicasClasseSocial;
