import { useContext } from 'react';
import WorkerContext from '../../../context/WorkersContext';
import recurrentCity from '../../../utils/recurrentCity';
import recurrentAge from '../../../utils/recurrentAge';
import recurrentGenre from '../../../utils/recurrentGenre';
import * as S from './Insights.styles';

function Insights() {
  const { filteredWorkers } = useContext(WorkerContext);

  let cidadeMaisRecorrente;
  let idadeMaisRecorrente;
  let generoMaisRecorrente;

  let totalIdades = 0;

  if (filteredWorkers) {
    filteredWorkers.forEach((worker) => { totalIdades += worker.idade; });
    cidadeMaisRecorrente = recurrentCity(filteredWorkers);
    idadeMaisRecorrente = recurrentAge(filteredWorkers);
    generoMaisRecorrente = recurrentGenre(filteredWorkers);
  }
  return (
    <>
      { filteredWorkers && (
        <S.Section>
          <h3>Dados mais recorrentes</h3>
          <p>
            {'Colaboradores nestes filtros: '}
            <b>{filteredWorkers?.length}</b>
          </p>
          <div>
            <p>
              {'Cidade: '}
              <b>{ cidadeMaisRecorrente?.cidade }</b>
              {` (${cidadeMaisRecorrente?.ocorrencias}x)`}
            </p>
          </div>
          <div>
            <p>
              {'Idade mais: '}
              <b>{ idadeMaisRecorrente?.idade }</b>
              {` (${idadeMaisRecorrente?.ocorrencias}x)`}
            </p>
          </div>
          <div>
            <p>
              {'Média de idade: '}
              <b>{Math.floor(totalIdades / filteredWorkers.length)}</b>
            </p>
          </div>
          <div>
            <p>
              {'Gênero: '}
              <b>{ generoMaisRecorrente?.genero }</b>
              {` (${generoMaisRecorrente?.ocorrencias}x)`}
            </p>
          </div>
        </S.Section>
      )}
      <div />
    </>
  );
}

export default Insights;
