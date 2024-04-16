import WorkerType from '../interfaces/workerInterface';

function recurrentAge(workers: WorkerType[]) {
  const contagemIdades: { [idade: string]: number } = {};

  workers.forEach((worker: WorkerType) => {
    const { idade } = worker;

    if (contagemIdades[idade.toString()]) {
      contagemIdades[idade.toString()]++;
    } else {
      contagemIdades[idade.toString()] = 1;
    }
  });

  let idadeMaisRecorrente;
  let maiorContagem = 0;

  Object.keys(contagemIdades).forEach((idade) => {
    const contagem = contagemIdades[idade];
    if (contagem > maiorContagem) {
      idadeMaisRecorrente = idade;
      maiorContagem = contagem;
    }
  });

  if (idadeMaisRecorrente !== undefined) {
    return {
      idade: idadeMaisRecorrente,
      ocorrencias: contagemIdades[idadeMaisRecorrente],
    };
  }
  return {
    idade: 'Nenhuma idade recorrente encontrada',
    ocorrencias: 0,
  };
}

export default recurrentAge;
