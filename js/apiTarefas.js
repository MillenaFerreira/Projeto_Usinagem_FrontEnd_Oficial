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

  export const updateTarefa = async (idTarefa, bodyUpdate) => {
    const url = `https://usinagem-senai-api.cyclic.app/v1/projeto-usinagem/tarefa/${idTarefa}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyUpdate)
    };
  
    fetch(url, options)
      .then(response => {
        if (response.ok) {
          console.log('tarefa atualizada com sucesso!');
          location.reload();
          
        } else {
          console.log('Erro ao atualizar a tarefa.');
        }
      })
      .catch(error => {
        console.log('Ocorreu um erro na requisição:', error);
      });
  }