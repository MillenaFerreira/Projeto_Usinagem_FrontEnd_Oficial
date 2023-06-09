'use strict'

export const pesquisarTarefas = async () => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/tarefa`;
    const response = await fetch(url);
    const data = await response.json();
    return data.tarefas;
  }


  export const createTarefa= async (tarefa) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/tarefa`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tarefa)
    };
  
    fetch(url, options)
  }

  export const deleteTarefa = async (tarefa) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/tarefa/${tarefa}`;
    const options = {
      method: 'DELETE'
    };
  
    fetch(url, options)
  }