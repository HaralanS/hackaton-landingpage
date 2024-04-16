/* eslint-disable max-len */
import { useContext } from 'react';
import { Button } from 'rsuite';
import WorkerContext from '../../../context/WorkersContext';
import * as S from './Table.styles';

function Table() {
  const {
    filteredWorkers,
    usingFilter,
    setFilteredWorkers,
    setUsingFilter,
  } = useContext(WorkerContext);

  const clearFilters = (e) => {
    e.preventDefault();
    setFilteredWorkers([]);
    setUsingFilter(false);
    window.location.reload();
  };
  return (
    <>
      { filteredWorkers && filteredWorkers.length > 0 ? (
        <S.Section>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Localidade</th>
                <th>Idade</th>
                <th>Departamento</th>
                <th>Gênero</th>
              </tr>
            </thead>
            <tbody>
              { filteredWorkers?.map((worker, i) => (
                <tr key={ i }>
                  <td>{ worker.nome }</td>
                  <td>{ worker.localidade }</td>
                  <td>{ worker.idade }</td>
                  <td>{ worker.departamento }</td>
                  <td>{ worker.genero }</td>
                </tr>
              )) }
            </tbody>
          </table>
        </S.Section>
      ) : null }
      { usingFilter && (
        <S.NoWorker>
          <S.H3>Nenhum colaborador encontrado.</S.H3>
          <Button
            type="submit"
            onClick={ (e) => clearFilters(e) }
            color="red"
            appearance="primary"
          >
            Limpar filtros
          </Button>
        </S.NoWorker>
      ) }
    </>
  );
}

export default Table;
