import WorkerType from '../interfaces/workerInterface';

function recurrentGenre(workers: WorkerType[]) {
  const contagemGeneros: { [genero: string]: number } = {};

  workers.forEach((worker: WorkerType) => {
    const { genero } = worker;

    if (contagemGeneros[genero]) {
      contagemGeneros[genero]++;
    } else {
      contagemGeneros[genero] = 1;
    }
  });

  let generoMaisRecorrente;
  let maiorContagem = 0;

  Object.keys(contagemGeneros).forEach((genero) => {
    const contagem = contagemGeneros[genero];
    if (contagem > maiorContagem) {
      generoMaisRecorrente = genero;
      maiorContagem = contagem;
    }
  });

  if (generoMaisRecorrente !== undefined) {
    return {
      genero: generoMaisRecorrente,
      ocorrencias: contagemGeneros[generoMaisRecorrente],
    };
  }
  return {
    genero: 'Nenhum gênero recorrente encontrado',
    ocorrencias: 0,
  };
}

export default recurrentGenre;
