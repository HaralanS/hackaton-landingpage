/* eslint-disable max-len */
import { IoArrowBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import diversidade from '../../assets/dashboard/diversidade.png';
import * as S from './Dicas.styles';

function DicasEtnia() {
  const navigate = useNavigate();
  document.title = 'Como promover a diversidade racial nas empresas';
  return (
    <S.Section>
      <IoArrowBackCircle onClick={ () => navigate('/') } className="backBtn" size={ 30 } />
      <h1>A Importância da Diversidade Racial nas empresas</h1>
      <div className="text">
        <p>
          Em um mundo cada vez mais globalizado e interconectado, a diversidade racial se torna um elemento fundamental para o sucesso e a sustentabilidade das empresas. A diversidade racial não apenas reflete a composição da sociedade em que vivemos, mas também traz uma série de benefícios tangíveis e intangíveis para o ambiente corporativo.
        </p>
        <p>
          A diversidade racial no local de trabalho não se trata apenas de um imperativo ético, mas também de uma estratégia inteligente de negócios. Ao criar um ambiente inclusivo e diversificado, as empresas podem colher uma série de benefícios, incluindo:
        </p>
        <img src={ diversidade } alt="uma arte com 10 pessoas de diversas cultural, etnias e gêneros representando a diversidade" />
        <ul>
          <li>
            Criatividade e Inovação: A diversidade racial traz diferentes perspectivas, experiências e formas de pensar para a mesa. Isso estimula a criatividade e a inovação, levando a soluções mais eficazes e disruptivas para os desafios enfrentados pela empresa.
          </li>
          <li>
            Tomada de Decisão Melhor Informada: Ao contar com uma equipe diversificada, as empresas têm acesso a uma variedade de pontos de vista e insights. Isso permite uma tomada de decisão mais informada e abrangente, reduzindo o risco de pensamento de grupo e aumentando a probabilidade de identificar oportunidades e ameaças de forma mais precisa.
          </li>
          <li>
            Atração e Retenção de Talentos: Um ambiente de trabalho inclusivo e diversificado é mais atrativo para profissionais talentosos de diferentes origens raciais. Além disso, uma cultura organizacional que valoriza a diversidade tende a ter uma taxa mais alta de retenção de funcionários, uma vez que os colaboradores se sentem valorizados e respeitados.
          </li>
          <li>
            Acesso a Novos Mercados e Clientes: Em um mundo cada vez mais diversificado, as empresas precisam ser capazes de se relacionar e se conectar com uma ampla gama de clientes e consumidores. Uma equipe diversificada pode fornecer insights culturais e linguísticos que são essenciais para alcançar e atender com eficácia diferentes segmentos de mercado.
          </li>
          <li>
            Reputação e Responsabilidade Social Corporativa: As empresas que demonstram um compromisso genuíno com a diversidade racial não apenas fortalecem sua reputação junto aos clientes, parceiros e investidores, mas também desempenham um papel significativo na promoção da equidade e inclusão social.
          </li>
        </ul>
        <p>
          Diante desses benefícios, é fundamental que as empresas adotem medidas concretas para aumentar a diversidade racial em seus quadros. Isso inclui a implementação de políticas de recrutamento e seleção inclusivas, a promoção de programas de desenvolvimento profissional voltados para grupos minoritários e a criação de uma cultura organizacional que valorize e celebre a diversidade em todas as suas formas.
        </p>
      </div>
    </S.Section>
  );
}

export default DicasEtnia;
