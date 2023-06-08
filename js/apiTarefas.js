'use strict'

export const pesquisarTarefas = async () => {
    const url = `https://usinagem-senai.cyclic.app/v1/projeto-usinagem/tarefa`;
    const response = await fetch(url);
    const data = await response.json();
    return data.tarefas;
  }

