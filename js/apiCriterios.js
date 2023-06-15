'use strict'

export const pesquisarCriterios = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/criterio`;
    const response = await fetch(url);
    const data = await response.json();
    return data.criterios;
  }
export const pesquisarCriteriosPeloIdTarefa = async (idTarefa) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/criterio?idTarefa=${idTarefa}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.criterios;
    
  }

  export const updateCriterio = async (idCriterio, bodyCriterio) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/criterio/${idCriterio}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyCriterio)
    };
  
    fetch(url, options)
    .then(response => {
      if (response.ok) {
        location.reload();
  
      } else {
        console.log('Erro ao criar a tarefa.');
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error);
    });
  
  }

export const createCriterio = async (idTarefa, criterio) => {
  const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/criterio?idTarefa=${idTarefa}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(criterio)
  };
  fetch(url, options)
  .then(response => {
    if (response.ok) {
      location.reload();

    } else {
      console.log('Erro ao criar a tarefa.');
    }
  })
  .catch(error => {
    console.log('Ocorreu um erro na requisição:', error);
  });
}