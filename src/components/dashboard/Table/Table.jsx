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
    <S.Section>
      <div className="ClearDiv">
        <S.H3 className={(usingFilter && !filteredWorkers.length) ? "activeClear" : "inactiveClear"}>
          Nenhum colaborador encontrado.
        </S.H3>
        <Button
          className={(usingFilter && !filteredWorkers.length) ? "activeClear" : "inactiveClear"}
          type="submit"
          onClick={(e) => clearFilters(e)}
          color="red"
          appearance="primary"
        >
          Limpar filtros
        </Button>
      </div>
      {filteredWorkers && filteredWorkers.length > 0 && (
        <S.SectionTable>
          <Button
            type="submit"
            onClick={(e) => clearFilters(e)}
            color="red"
            appearance="primary"
          >
            Limpar filtros
          </Button>
            <div className="tabela-div">
            <table>
              <thead>
                <tr>
                  <th className="stickyColumn">Nome</th>
                  <th>Localidade</th>
                  <th>Idade</th>
                  <th>Departamento</th>
                  <th>Gênero</th>
                </tr>
              </thead>
              <tbody>
                {filteredWorkers?.map((worker, i) => (
                  <tr key={i}>
                    <td>{worker.nome}</td>
                    <td>{worker.localidade}</td>
                    <td>{worker.idade}</td>
                    <td>{worker.departamento}</td>
                    <td>{worker.genero}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </S.SectionTable>
      )}
    </S.Section>
  );
}

export default Table;
