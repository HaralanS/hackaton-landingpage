/* eslint-disable max-len */
import { Button, Progress } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import metas from '../../../data/Metas.json';
import colaboradores from '../../../data/colaboradores.json';
import * as S from './Goals.styles';

function Goals() {
  let totalMulheres = 0;
  let totalNaoBinarios = 0;
  let totalPessoasPretas = 0;
  let totalPessoasPardas = 0;
  let totalEnsinoMedio = 0;
  let totalClasseMedia = 0;
  let totalBaixaRenda = 0;

  colaboradores.forEach((colaborador) => {
    if (colaborador.genero === 'Feminino') totalMulheres += 1;
    if (colaborador.genero === 'Não binário') totalNaoBinarios += 1;
    if (colaborador.etnia === 'Negro') totalPessoasPretas += 1;
    if (colaborador.etnia === 'Pardo') totalPessoasPardas += 1;
    if (colaborador.escolaridade === 'Ensino Médio') totalEnsinoMedio += 1;
    if (colaborador.classe_social === 'Classe Média') totalClasseMedia += 1;
    if (colaborador.classe_social === 'Baixa Renda') totalBaixaRenda += 1;
  });

  const mediaMulheres = Math.floor((totalMulheres / colaboradores.length) * 100);
  const mediaNaoBinarios = Math.floor((totalNaoBinarios / colaboradores.length) * 100);
  const mediaPessoasPretas = Math.floor((totalPessoasPretas / colaboradores.length) * 100);
  const mediaPessoasPardas = Math.floor((totalPessoasPardas / colaboradores.length) * 100);
  const mediaEnsinoMedio = Math.floor((totalEnsinoMedio / colaboradores.length) * 100);
  const mediaClasseMedia = Math.floor((totalClasseMedia / colaboradores.length) * 100);
  const mediaBaixaRenda = Math.floor((totalBaixaRenda / colaboradores.length) * 100);

  const navigate = useNavigate();
  return (
    <S.Section>
      <h2>Metas gerais da Corp Solutions</h2>
      <div className="goalDiv">
        <p className="subTitle">Diversidade por classe social:</p>

        <p>
          { `A meta atual é para pessoas com baixa renda
          na Corp Solutions é de no mínimo ${metas.classe_social.Baixa_renda}% e de
          pessoas de classe média ${metas.classe_social.Classe_média}% respectivamente.` }
        </p>

        <Progress.Line percent={ mediaBaixaRenda } strokeColor={ mediaBaixaRenda >= metas.classe_social.Baixa_renda ? '#2FC18C' : '#F44336' } />
        <Progress.Line percent={ mediaClasseMedia } strokeColor={ mediaClasseMedia >= metas.classe_social.Classe_média ? '#2FC18C' : '#F44336' } />

        { (mediaClasseMedia < metas.classe_social.Classe_média || mediaBaixaRenda < metas.classe_social.Baixa_renda) && (
          <Button onClick={ () => navigate('/dicas/classe-social') } className="como-melhorar" color="green" appearance="primary">Como melhorar?</Button>
        ) }
      </div>
      <div className="goalDiv">
        <p className="subTitle">Diversidade por escolaridade:</p>

        <p>
          { `A meta atual é para pessoas com ensino médio
          na Corp Solutions é de no mínimo ${metas.escolaridade.Ensino_Médio}%.` }
        </p>

        <Progress.Line percent={ mediaEnsinoMedio } strokeColor={ mediaEnsinoMedio >= metas.escolaridade.Ensino_Médio ? '#2FC18C' : '#F44336' } />

        { mediaEnsinoMedio < metas.escolaridade.Ensino_Médio && (
          <Button onClick={ () => navigate('/dicas/escolaridade') } className="como-melhorar" color="green" appearance="primary">Como melhorar?</Button>
        ) }
      </div>
      <div className="goalDiv">
        <p className="subTitle">Diversidade de gênero:</p>

        <p>
          { `A meta atual é para mulheres na
          Corp Solutions é de pelo menos ${metas.gênero.Feminino}% e de pessoas não binárias é de ${metas.gênero.Não_binário}% respectivamente.` }
        </p>

        <Progress.Line percent={ mediaMulheres } strokeColor={ mediaMulheres >= metas.gênero.Feminino ? '#2FC18C' : '#F44336' } />
        <Progress.Line percent={ mediaNaoBinarios } strokeColor={ mediaNaoBinarios >= metas.gênero.Não_binário ? '#2FC18C' : '#F44336' } />

        {(mediaMulheres < metas.gênero.Feminino || mediaNaoBinarios < metas.gênero.Não_binário) && (
          <Button onClick={ () => navigate('/dicas/genero') } className="como-melhorar" color="green" appearance="primary">Como melhorar?</Button>
        )}
      </div>
      <div className="goalDiv">
        <p className="subTitle">Diversidade de etnias:</p>

        <p>
          { `A meta atual é para pessoas pretas
          na Corp Solutions é de no mínimo ${metas.etnia.Negros}% e de pessoas pardas ${metas.etnia.Pardos}% respectivamente.` }
        </p>

        <Progress.Line percent={ mediaPessoasPretas } strokeColor={ mediaPessoasPretas >= metas.etnia.Negros ? '#2FC18C' : '#F44336' } />
        <Progress.Line percent={ mediaPessoasPardas } strokeColor={ mediaPessoasPardas >= metas.etnia.Pardos ? '#2FC18C' : '#F44336' } />

        {(mediaPessoasPretas < metas.etnia.Negros || mediaPessoasPardas < metas.etnia.Pardos) && (
          <Button onClick={ () => navigate('/dicas/etnia') } className="como-melhorar" color="green" appearance="primary">Como melhorar?</Button>
        )}
      </div>
    </S.Section>
  );
}

export default Goals;
