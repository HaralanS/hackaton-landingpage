import WorkerType from '../interfaces/workerInterface';

function recurrentCity(workers: WorkerType[]) {
  const contagemCidades: { [cidade: string]: number } = {};

  workers.forEach((worker: WorkerType) => {
    const cidade = worker.localidade;

    if (contagemCidades[cidade]) {
      contagemCidades[cidade]++;
    } else {
      contagemCidades[cidade] = 1;
    }
  });

  let cidadeMaisRecorrente;
  let maiorContagem = 0;

  const cidades = Object.entries(contagemCidades);
  cidades.forEach(([cidade, contagem]) => {
    if (contagem > maiorContagem) {
      cidadeMaisRecorrente = cidade;
      maiorContagem = contagem;
    }
  });

  if (cidadeMaisRecorrente !== undefined) {
    return {
      cidade: cidadeMaisRecorrente,
      ocorrencias: contagemCidades[cidadeMaisRecorrente],
    };
  }
  return {
    cidade: 'Nenhuma cidade recorrente encontrada',
    ocorrencias: 0,
  };
}

export default recurrentCity;
