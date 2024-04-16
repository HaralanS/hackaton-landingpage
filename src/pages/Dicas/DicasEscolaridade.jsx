/* eslint-disable max-len */
import { IoArrowBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import escolaridade from '../../assets/dashboard/escolaridade.png';
import * as S from './Dicas.styles';

function DicasEscolaridade() {
  const navigate = useNavigate();
  return (
    <S.Section>
      <IoArrowBackCircle onClick={ () => navigate('/') } className="backBtn" size={ 30 } />
      <h1>O Papel das Empresas no desenvolvimento acadêmico</h1>
      <div className="text">
        <p>
          Em um mundo cada vez mais voltado para a inovação e o conhecimento, a educação desempenha um papel fundamental na capacitação de indivíduos e no impulsionamento do desenvolvimento econômico e social. As empresas têm uma oportunidade única de contribuir para o avanço acadêmico de seus colaboradores, não apenas beneficiando-os individualmente, mas também fortalecendo a competitividade e o crescimento sustentável de suas próprias operações.
        </p>
        <img src={ escolaridade } alt="uma arte com diversos materiais escolares" />
        <ul>
          <li>
            Programas de Educação Corporativa: As empresas podem implementar programas de educação corporativa que ofereçam oportunidades de aprendizado contínuo para seus colaboradores. Isso pode incluir cursos, workshops e treinamentos relacionados às habilidades técnicas específicas necessárias para desempenhar suas funções, bem como programas de desenvolvimento de liderança e habilidades interpessoais.
          </li>
          <li>
            Incentivos à Educação Formal: Além dos programas internos de desenvolvimento profissional, as empresas podem incentivar seus colaboradores a prosseguirem com sua educação formal, seja apoiando financeiramente seus estudos, oferecendo bolsas de estudo ou flexibilidade de horários para frequentar aulas. Isso não apenas contribui para o crescimento individual dos colaboradores, mas também aumenta a qualificação da força de trabalho da empresa.
          </li>
          <li>
            Parcerias com Instituições de Ensino: Estabelecer parcerias estratégicas com instituições de ensino locais ou universidades pode proporcionar acesso privilegiado a recursos educacionais e oportunidades de colaboração. Por meio dessas parcerias, as empresas podem desenvolver programas educacionais personalizados, oferecer estágios e programas de estágio, e até mesmo financiar pesquisas e projetos acadêmicos relevantes para suas áreas de atuação.
          </li>
          <li>
            Promoção de uma Cultura de Aprendizado Contínuo: Ao promover uma cultura organizacional que valoriza e incentiva o aprendizado contínuo, as empresas podem criar um ambiente propício ao desenvolvimento acadêmico de seus colaboradores. Isso pode ser feito por meio de iniciativas como grupos de estudo, clubes de leitura, palestras internas e eventos educacionais, que estimulam o compartilhamento de conhecimento e a busca por crescimento pessoal e profissional.
          </li>
          <li>
            Reconhecimento e Incentivo ao Desempenho Acadêmico: Reconhecer e recompensar o desempenho acadêmico dos colaboradores pode ser uma poderosa ferramenta de motivação e engajamento. As empresas podem oferecer prêmios, certificações ou oportunidades de progressão na carreira com base nos resultados acadêmicos alcançados pelos colaboradores, incentivando-os a continuarem investindo em sua educação e desenvolvimento.
          </li>
        </ul>
        <p>
          Ao investir no desenvolvimento acadêmico de seus colaboradores, as empresas não apenas contribuem para o crescimento individual e profissional de seus funcionários, mas também fortalecem sua própria capacidade de inovação, competitividade e sustentabilidade a longo prazo. A educação é um investimento que beneficia a todos e que pode transformar positivamente a vida dos colaboradores, das empresas e das comunidades em que estão inseridas.
        </p>
      </div>
    </S.Section>
  );
}

export default DicasEscolaridade;
