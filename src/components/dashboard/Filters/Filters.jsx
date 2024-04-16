import { useContext, useState } from 'react';
import * as S from './Filters.styles';
import data from '../../../data/colaboradores.json';
import WorkerContext from '../../../context/WorkersContext';

function Filters() {
  const [filters, setFilters] = useState({
    setor: '',
    classe: '',
    escolaridade: '',
    etnia: '',
    genero: '',
    nome: '',
  });

  const { setFilteredWorkers, setUsingFilter } = useContext(WorkerContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { setor, classe, escolaridade, etnia, genero, nome } = filters;

    const filteredResult = data.filter((worker) => {
      return (!setor || worker.departamento === setor)
        && (!classe || worker.classe_social === classe)
        && (!escolaridade || worker.escolaridade === escolaridade)
        && (!etnia || worker.etnia === etnia)
        && (!genero || worker.genero === genero)
        && (!nome || worker.nome.toLowerCase().includes(nome.toLowerCase()));
    });
    setUsingFilter(true);
    setFilteredWorkers(filteredResult);
  };

  return (
    <S.Section>
      <div className="setorAndFilter">
        <div>
          <p className="inputP">Departamento: </p>
          <select
            value={ filters.setor }
            onChange={ (e) => handleChange(e) }
            name="setor"
          >
            <option>Selecione...</option>
            <option value="Administração">Administração</option>
            <option value="Marketing">Marketing</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Tecnologia da Informação">Tecnologia da Informação</option>
          </select>
        </div>
        <div>
          <p className="inputP">Classe Social: </p>
          <select
            value={ filters.classe }
            onChange={ (e) => handleChange(e) }
            name="classe"
          >
            <option>Selecione...</option>
            <option value="Classe Média Alta">Classe Média Alta</option>
            <option value="Classe Média">Classe Média</option>
            <option value="Baixa renda">Baixa renda</option>
          </select>
        </div>
        <div>
          <p className="inputP">Escolaridade: </p>
          <select
            value={ filters.escolaridade }
            onChange={ (e) => handleChange(e) }
            name="escolaridade"
          >
            <option>Selecione...</option>
            <option value="Ensino Médio">Ensino Médio</option>
            <option value="Ensino Superior">Ensino Superior</option>
          </select>
        </div>
        <div>
          <p className="inputP">Etnia: </p>
          <select
            value={ filters.etnia }
            onChange={ (e) => handleChange(e) }
            name="etnia"
          >
            <option>Selecione...</option>
            <option value="Branco">Branco</option>
            <option value="Pardo">Pardo</option>
            <option value="Negro">Negro</option>
          </select>
        </div>
        <div>
          <p className="inputP">Gênero: </p>
          <select
            value={ filters.genero }
            onChange={ (e) => handleChange(e) }
            name="genero"
          >
            <option>Selecione...</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Não binário">Não binário</option>
          </select>
        </div>
      </div>
      <label htmlFor="search">
        <p className="inputP">Pesquisar funcionário:</p>
        <input
          type="text"
          value={ filters.nome }
          name="nome"
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <button onClick={ handleSubmit }>Pesquisar</button>
    </S.Section>
  );
}

export default Filters;
