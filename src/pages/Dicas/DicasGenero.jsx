/* eslint-disable max-len */
import { IoArrowBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import diversidade from '../../assets/dashboard/diversidade-genero.webp';
import * as S from './Dicas.styles';

function DicasGenero() {
  const navigate = useNavigate();
  document.title = 'Promovendo a diversidade de gênero nas empresas';
  return (
    <S.Section>
      <IoArrowBackCircle onClick={ () => navigate('/') } className="backBtn" size={ 30 } />
      <h1>Promovendo a Diversidade de Gênero: Estratégias para Empresas Inclusivas</h1>
      <div className="text">
        <p>
          Em um mundo onde a igualdade de gênero é uma meta urgente e necessária, as empresas desempenham um papel crucial na promoção da diversidade e inclusão em seus ambientes de trabalho. Ao reconhecer e valorizar a contribuição de todas as identidades de gênero, as empresas não apenas criam ambientes mais justos e equitativos, mas também se beneficiam de uma variedade de perspectivas e experiências que impulsionam a inovação e o crescimento.
        </p>
        <img src={ diversidade } alt="uma arte com 10 pessoas de diversas cultural, etnias e gêneros representando a diversidade" />
        <ul>
          <li>
            Políticas de Recrutamento Inclusivas: As empresas podem adotar políticas de recrutamento que visam ativamente diversificar sua força de trabalho, garantindo que mulheres e pessoas não binárias sejam representadas em todos os níveis da organização. Isso pode incluir práticas de recrutamento cegas para o gênero, programas de estágio direcionados e parcerias com organizações que apoiam a diversidade de gênero.
          </li>
          <li>
            Cultura Organizacional Inclusiva: Promover uma cultura organizacional que valoriza e respeita todas as identidades de gênero é essencial para criar um ambiente de trabalho inclusivo. Isso envolve a implementação de políticas antidiscriminação e de assédio, programas de sensibilização e treinamento para todos os colaboradores, e a promoção de espaços seguros para discussões sobre questões de gênero.
          </li>
          <li>
            Desenvolvimento Profissional e Liderança: Investir no desenvolvimento profissional e liderança de mulheres e pessoas não binárias é fundamental para garantir sua representação em cargos de liderança e tomada de decisão. As empresas podem oferecer programas de mentoria, coaching e treinamento de liderança específicos para mulheres e pessoas não binárias, bem como estabelecer metas de diversidade de gênero para promover a igualdade de oportunidades de carreira.
          </li>
          <li>
            Benefícios e Políticas de Conciliação: Oferecer benefícios e políticas de conciliação trabalho-vida equilibrados é essencial para apoiar mulheres e pessoas não binárias em suas carreiras e responsabilidades pessoais. Isso pode incluir licença parental remunerada, horários flexíveis de trabalho, creches no local e outras medidas que ajudem a reduzir as barreiras enfrentadas por esses grupos no mercado de trabalho.
          </li>
          <li>
            Participação em Redes e Comunidades: Incentivar a participação ativa em redes e comunidades que promovem a diversidade de gênero pode fornecer um importante apoio e recursos para mulheres e pessoas não binárias. As empresas podem patrocinar eventos, conferências e grupos de afinidade que visam fortalecer e empoderar esses grupos dentro e fora da organização.
          </li>
        </ul>
        <p>
          Ao adotar estratégias proativas para promover a diversidade de gênero, as empresas não apenas demonstram seu compromisso com a igualdade e inclusão, mas também fortalecem sua reputação, atratividade como empregadores e capacidade de inovar e prosperar em um mundo diversificado e globalizado. A diversidade de gênero não é apenas uma questão de justiça social, mas também uma vantagem competitiva e um imperativo moral para o sucesso sustentável das empresas no século XXI.
        </p>
      </div>
    </S.Section>
  );
}

export default DicasGenero;
